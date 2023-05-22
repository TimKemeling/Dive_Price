import re
import scrapy
from datetime import datetime
from scrapy.loader import ItemLoader
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem


class SimpleLifeSpider(scrapy.Spider):
    name = "simple_life"
    start_urls = ["https://www.simplelifedivers.com"]
    links_list = []

    def parse(self, response):
        # Take all links from menu and make list 
        r = response.css('div#desktop_menu > ul > li')
        for l in r:
            c = l.css('ul > li')
            for l in c:
                full_link = urljoin('https://www.simplelifedivers.com', l.css('a::attr(href)').get() )
                self.links_list.append(full_link)

        # follow links in list and use parse_page to scrape all pages
        for link in self.links_list:
            yield scrapy.Request(link, callback=self.parse_page)

    

    def parse_page(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Simple Life Divers"
        location = "Koh Tao"
        agency = "PADI"

        # data contains all cards for each course. Scrape from here 
        for data in response.css("body"):
            l = ItemLoader(item = DivePriceItem(), selector=data)

            url = urljoin('https://www.simplelifedivers.com', response.request.url)
            price = response.css('ul#price_detail > li').get()


            l.add_css('name', 'h1')
            l.add_value('price', price)
            l.add_value('course_Link', url) 
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item()
