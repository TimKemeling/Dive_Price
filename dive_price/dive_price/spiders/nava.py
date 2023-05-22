import scrapy
from scrapy.http.response import urljoin
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader



class NavaSpider(scrapy.Spider):
    name = "Nava"
    allowed_domains = ["https://www.navascuba.com/"]
    start_urls = ["https://www.navascuba.com/diving-level/beginner/",
                  "https://www.navascuba.com/diving-level/certified-diver/",
                  "https://www.navascuba.com/diving-level/cont-ed/"]

    def parse(self, response):
        
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Nava"
        location = "Koh Tao"
        agency = "PADI"

        # courses contains all cards for each course. Scrape from here 
        courses = response.css('a.woocommerce-LoopProduct-link.woocommerce-loop-product__link')
        for course in courses:
            url = urljoin('https://www.scubabirds.com', course.css('a::attr(href)').get())
            l = ItemLoader(item = DivePriceItem(), selector=course)

            price_line = course.css('span.price > span.amount > bdi::text').get()
            price = price_line.replace('.00', '')

            l.add_css('name', 'h2::text')
            l.add_value('price', price)
            l.add_css('course_Link', 'a::attr(href)')
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)

            yield l.load_item()