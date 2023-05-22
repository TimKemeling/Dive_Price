import scrapy
from scrapy.http.response import urljoin
from datetime import datetime
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader



class BansSpider(scrapy.Spider):
    name = "Bans"
    start_urls = ["https://www.bansdivingresort.com/en/"]

    links_list = [] 

    def parse(self, response):
        # Take links in menu and make list of links
        link_drop = response.css('ul#menu-english > li')
        links = link_drop[2].css('ul > li')

        for link in links[1:8]:
            l = link.css('a::attr(href)').get()
            self.links_list.append(l)

        print(self.links_list)

        # Follow links and extract data
        for link in self.links_list:
            yield scrapy.Request(link, callback=self.parse_page)


    def parse_page(self, response):
        
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Bans"
        location = "Koh Tao"
        agency = "PADI"

        # courses contains all info for the course. Scrape from here 
        courses = response.css('div.qodef-info-section-part.qodef-tour-item-title-holder')
        for course in courses:
            url = urljoin('https://www.bansdivingresort.com/en/', response.request.url)
            l = ItemLoader(item = DivePriceItem(), selector=course)

            l.add_css('name', 'h3::text')
            l.add_css('price', 'span.qodef-tours-item-price')
            l.add_value('course_Link', url)
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)

            yield l.load_item()