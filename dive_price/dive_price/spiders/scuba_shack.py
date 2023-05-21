import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader

class ScubaShackSpider(scrapy.Spider):
    name = "scuba_shack"
    allowed_domains = ["www.scubashackkohtao.com"]
    start_urls = ["https://www.scubashackkohtao.com/"]
    links_list = []

    def parse(self, response):
        # Take links in menu and make list of links
        links_drop = response.css('nav.menu_main_nav_area > ul#menu_main > li')
        links_menu = links_drop[1:4].css('ul > li')

        for link in links_menu:
            l = link.css('a::attr(href)').get()
            self.links_list.append(l)

        # Follow links and extract data
        for link in self.links_list:
            yield scrapy.Request(link, callback=self.parse_page)


    def parse_page(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Scuba Shack"
        location = "Koh Tao"
        agency = "PADI"
        url = urljoin('https://www.scubashackkohtao.com', response.request.url)


        # courses contains all cards for each course. Scrape from here 
        for course in response.css("body"):
            l = ItemLoader(item = DivePriceItem(), selector=course)

            price_line = course.xpath("//*[contains(text(), 'Cost')]/following-sibling::p/text()").get()
            price = re.search(r'(\d*.\d+) baht', price_line.lower())

            l.add_css('name', 'h1')
            l.add_value('price', price.group(1))
            l.add_value('course_Link', url)
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)

            yield l.load_item() 
