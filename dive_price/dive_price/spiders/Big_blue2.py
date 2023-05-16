import scrapy
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader


class BigBlueSpider(scrapy.Spider):
    name = "Big_BlueFD"
    allowed_domains = ["www.bigbluediving.com"]
    start_urls = ["https://www.bigbluediving.com/fun-diving/"]


    # parse page mentioned above and extract data
    def parse(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Big Blue Diving"
        location = "Koh Tao"
        agency = "SSI"

        # courses contains all cards for fundivers. Scrape from here. NEEDS TO BE ADJUSTED FOR RIGHT PRICE
        courses = response.css("div.contwrap")
        course_link = "https://www.bigbluediving.com/fun-diving/"
        for course in courses:
            l = ItemLoader(item = DivePriceItem(), selector=course)

            l.add_css('name', 'h1')
            l.add_css('price','div.priceRow> div.price > strong::text')
            l.add_value('course_Link', course_link)
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)



            yield l.load_item()