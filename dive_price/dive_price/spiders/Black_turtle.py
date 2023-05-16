import re
import scrapy
from datetime import datetime
from scrapy.loader import ItemLoader
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem


class BlackTurtleSpider(scrapy.Spider):
    name = "Black_turtle"
    start_urls = ["https://www.blackturtledive.com"]
    links_list = []

    def parse(self, response):
        # Take all links from menu and make list 
        links_menu = response.css("li#menu-item-1535")
        link_sel = links_menu.css("a::attr('href')")
        
        for link in link_sel:
             self.links_list.append(link.get())  

        # follow links in list and use parse_page to scrape all pages
        for link in self.links_list[2:]:
            yield scrapy.Request(link, callback=self.parse_page)

    

    def parse_page(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Black Turtle Dive"
        location = "Koh Tao"
        agency = "PADI"

        # data contains all cards for each course. Scrape from here 
        for data in response.css("div.single-post-detail"):
            l = ItemLoader(item = DivePriceItem(), selector=data)

            url = urljoin('http://www.blackturtledive.com/', response.request.url)


            p = data.css("div.bt-course-price")
            price_line = p.get()
            price = re.search(r'Price: (\d*,\d+)', price_line)

            l.add_css('name', 'h2')
            l.add_value('price', price.group(1))
            l.add_value('course_Link', url) 
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item()
