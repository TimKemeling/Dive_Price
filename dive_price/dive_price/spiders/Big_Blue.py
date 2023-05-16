import re
import scrapy
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader


class BigBlueSpider(scrapy.Spider):
    name = "Big_Blue"
    allowed_domains = ["www.bigbluediving.com"]
    start_urls = ["https://www.bigbluediving.com/beginner-scuba-courses/",
                  "https://www.bigbluediving.com/advanced-diving-courses/",
                  "https://www.bigbluediving.com/big-blue-tech",
                  "https://www.bigbluediving.com/big-blue-instructor-training",
                  "https://www.bigbluediving.com/big-blue-conservation-koh-tao"]

    # parse all pages mentioned above and extract data
    def parse(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Big Blue Diving"
        location = "Koh Tao"
        agency = "SSI"

        # courses contains all cards for each course. Scrape from here 
        courses = response.css("article.product-feed")
        for course in courses:
            l = ItemLoader(item = DivePriceItem(), selector=course)

            price_line = courses.css('div.price')
            price = re.search(r'(\d*,\d+)', price_line.get())

            l.add_css('name', 'h3')
            l.add_css('price', 'div.price')
            l.add_css('course_Link', 'a::attr(href)')
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item() 

            
        
