import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader

class NewHeavenSpider(scrapy.Spider):
    name = "new_heaven"
    start_urls = ["https://newheavendiveschool.com/"]
    links_list = []

    def parse(self, response):
        # Take links in menu and make list of links
        links_drop = response.css('ul.uk-navbar-nav > li')[0]
        links_menu = links_drop.css('ul.uk-nav > li')


        for link in links_menu:
            l = link.css('a::attr(href)').get()
            full = urljoin('https://www.newheavendiveschool.com', l)
            self.links_list.append(full)

        # Follow links and extract data
        for link in self.links_list:
            yield scrapy.Request(link, callback=self.parse_page)


    def parse_page(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "New Heaven Dive School"
        location = "Koh Tao"
        agency = "SSI"
        url = urljoin('https://www.newheavendiveschool.com', response.request.url)


        # courses contains all cards for each course. Scrape from here 
        course = response.css('body')
        l = ItemLoader(item = DivePriceItem(), selector=course)

        price_line = course.css('div.uk-text-lead.uk-margin.uk-text-center > p::text').get()
        price = re.search(r'(\d*\d+)', price_line.lower())

        l.add_css('name', 'h1::text')
        l.add_value('price', price.group(1))
        l.add_value('course_Link', url)
        l.add_value('agency', agency)
        l.add_value('school', school)
        l.add_value('timestamp', now)
        l.add_value('location', location)

        yield l.load_item() 
