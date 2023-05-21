import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader

class SaireeCottageOwSpider(scrapy.Spider):
    name = "Sairee_cottage_OW"
    allowed_domains = ["https://www.saireecottagediving.com"]
    start_urls = ["https://www.saireecottagediving.com/open-water-diver-koh-tao-sairee-cottage-diving/"]

    # parse all pages mentioned above and extract data
    def parse(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Sairee Cottage Diving"
        location = "Koh Tao"
        agency = "PADI"
        url = urljoin('https://www.saireecottagediving.com', response.request.url)

        # course contains all cards for each course. Scrape from here 
        course = response.css('div.wpb_column.vc_column_container.vc_col-sm-4')
        name = course.css('h4::text')[-2].get()
        price_line = course.css('p::text')[-1].get()
        price = re.search(r'(\d+) THB', price_line)


        l = ItemLoader(item = DivePriceItem(), selector=course)


        l.add_value('name', name)
        l.add_value('price', price.group(1))
        l.add_value('course_Link', url)
        l.add_value('agency', agency)
        l.add_value('school', school)
        l.add_value('timestamp', now)
        l.add_value('location', location)

        yield l.load_item() 