import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader

class FiftySixSpider(scrapy.Spider):
    name = "KTD"
    start_urls = ["https://kohtaodivers.com/dive-courses/beginners",
                  "https://kohtaodivers.com/dive-courses/continue-your-education",
                  "https://kohtaodivers.com/dive-courses/professional-level",
                  "https://kohtaodivers.com/dive-courses/technical-diving-thailand"]
                

    def parse(self, response):

        # Take links from menu and make list urljoin to make sure it's full link
        links = response.css('a.uk-card.uk-card-default.uk-card-hover.uk-display-block.uk-link-toggle.uk-margin::attr(href)')
        for link in links:
            part = link.get()
            url = urljoin('https://kohtaodivers.com/', part)
            yield scrapy.Request(url, callback=self.parse_page)
                
         
    def parse_page(self, response):
        
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Koh Tao Divers"
        location = "Koh Tao"
        agency = "SSI"

        # data contains all cards for each course. Scrape from here 
        for data in response.css("div.uk-flex-auto.uk-width-1-1\@m"):
            url = urljoin('https://kohtaodivers.com/', response.request.url)
            l = ItemLoader(item = DivePriceItem(), selector=data)

            price_text = response.css('div.uk-flex-auto.uk-width-1-4\@m')
            price_dot = re.search(r'(\d*\.\d+)', price_text.get())
            price = price_dot.group(1).replace('.',',')


            l.add_css('name', 'h1::text')
            l.add_value('price', price)
            l.add_value('course_Link', url) 
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item()