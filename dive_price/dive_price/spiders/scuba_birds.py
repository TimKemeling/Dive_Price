import scrapy
from scrapy.http.response import urljoin
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader



class ScubaBirdsSpider(scrapy.Spider):
    name = "scuba_birds"
    allowed_domains = ["www.scubabirds.com/"]
    start_urls = ["https://www.scubabirds.com/prices/koh-tao-price-list.html"]

    def parse(self, response):
        
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Scuba Birds"
        location = "Koh Tao"
        agency = "PADI"

        # courses contains all cards for each course. Scrape from here 
        courses = response.css("table.price > tbody > tr")
        for course in courses:
            url = urljoin('https://www.scubabirds.com', course.css('a::attr(href)').get())
            l = ItemLoader(item = DivePriceItem(), selector=course)

            l.add_css('name', 'a::text')
            if len(course.css('td')) > 1:
                price = course.css('td')[1].get()
                l.add_value('price', price)
            l.add_value('course_Link', url)
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item()
