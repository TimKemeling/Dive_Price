import scrapy
from scrapy.http.response import urljoin
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader



class BansSpider(scrapy.Spider):
    name = "Bans_specs"
    start_urls = ["https://www.bansdivingresort.com/en/padi-courses/continue-learning/padi-specialty-courses/"]

    def parse(self, response):
        
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Bans"
        location = "Koh Tao"
        agency = "PADI"

        # courses contains all info for the course. Scrape from here 
        courses = response.css('div.wpb_text_column.wpb_content_element')
        for course in courses:
            url = 'https://www.bansdivingresort.com/en/padi-courses/continue-learning/padi-specialty-courses/'
            price_line = course.css('h5 > span::text')
            if not price_line:
                price = course.css('h5 > span > span::text').get()
            else:
                price = price_line[0].get()

            if ' includes DPV rental' in price:
                price = price.replace(' includes DPV rental', '')



            l = ItemLoader(item = DivePriceItem(), selector=course)

            l.add_css('name', 'h3')
            l.add_value('price', price)
            l.add_value('course_Link', url)
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)

            yield l.load_item()
