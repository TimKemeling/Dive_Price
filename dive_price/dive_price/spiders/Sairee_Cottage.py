import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader


class SaireeCottageSpider(scrapy.Spider):
    name = "Sairee_cottage"
    allowed_domains = ["https://www.saireecottagediving.com"]
    start_urls = ["https://www.saireecottagediving.com/discover-scuba-diving-koh-tao-sairee-cottage-diving/",
                  "https://www.saireecottagediving.com/scuba-diver-koh-tao/",
                  "https://www.saireecottagediving.com/advanced-open-water-koh-tao-sairee-cottage-diving/",
                  "https://www.saireecottagediving.com/padi-rescue-diver-koh-tao-sairee-cottage-diving/",
                  "https://www.saireecottagediving.com/fun-trips-fun-diving-sairee-diving-cottage-koh-tao/"]

    # parse all pages mentioned above and extract data
    def parse(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Sairee Cottage Diving"
        location = "Koh Tao"
        agency = "PADI"
        url = urljoin('https://www.saireecottagediving.com', response.request.url)
        price_line = response.css('div.wpb_column.vc_column_container.vc_col-sm-4').css('h2::text').get()
        price = price_line.replace(' THB', '')

        # course contains all cards for each course. Scrape from here 
        course = response.css('div.wpb_column.vc_column_container.vc_col-sm-4')
        l = ItemLoader(item = DivePriceItem(), selector=course)


        l.add_css('name', 'h4')
        l.add_value('price', price)
        l.add_value('course_Link', url)
        l.add_value('agency', agency)
        l.add_value('school', school)
        l.add_value('timestamp', now)
        l.add_value('location', location)

        yield l.load_item() 
         