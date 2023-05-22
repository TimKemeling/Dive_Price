import re
import scrapy
from datetime import datetime
from scrapy.loader import ItemLoader
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem


class CrystalSpider(scrapy.Spider):
    name = "Crystal"
    start_urls = ["https://www.crystaldive.com/"]
    links_list = []

    def parse(self, response):
        # Take all links from menu and make list 
        menu = response.css('ul.ubermenu-nav > li')
        DC_menu = menu[2]
        cat_men = DC_menu.css('ul.ubermenu-submenu.ubermenu-submenu-id-38934 > li') 
        all_cat_men = cat_men.css('li > ul.ubermenu-tabs-group > li')  # categories of courses in drop menu (7)
        
        for cat in all_cat_men[0:5]:
            courses = cat.css('ul > li')
            for course in courses:
                self.links_list.append(course.css('a::attr(href)').get())

        # follow links in list and use parse_page to scrape all pages
        for link in self.links_list:
            yield scrapy.Request(link, callback=self.parse_page)


    def parse_page(self, response):

        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Crystal Dive"
        location = "Koh Tao"
        agency = "PADI"

        # course contains data for each course. Scrape from here 
        course = response.css('div#coursesho > div')
        data = course[1]
        l = ItemLoader(item = DivePriceItem(), selector=data)

        url = urljoin('http://www.crystaldive.com/', response.request.url)
        name = data.css('h2::text').getall()


        l.add_value('name', name[-1])
        l.add_css('price', 'p.price > span > bdi::text')
        l.add_value('course_Link', url) 
        l.add_value('agency', agency)
        l.add_value('school', school)
        l.add_value('timestamp', now)
        l.add_value('location', location)


        yield l.load_item()
