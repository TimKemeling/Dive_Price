import re
import scrapy
from datetime import datetime
from scrapy.http.response import urljoin
from dive_price.items import DivePriceItem
from scrapy.loader import ItemLoader



class HydroSpider(scrapy.Spider):
    name = "Hydro"
    start_urls = ["http://www.hydronautsdiving.com/"]
    
    link_list = []

    def parse(self, response):

        # Take all links from menu and make list
        menu = response.css('ul#menu-1-b9abb7b > li') 
        for l in menu[1:3]:
            li = l.css('ul>li')
            for i in range(len(li)):
                url = li.css('a::attr(href)')[i]
                self.link_list.append(url.get())

        
        # Add divemaster course link NEED TO CHECK IF WORKING
        self.link_list.append(menu[3].css('li>a::attr(href)').get())

        # follow links in list and use parse_page to scrape all pages
        for link in self.link_list:
            yield scrapy.Request(link, callback=self.parse_page)



    def parse_page(self, response):
        n = datetime.now()
        now = n.strftime("%m/%d/%Y")
        school = "Hydronauts Diving"
        location = "Koh Tao"
        title = response.css('h1.elementor-heading-title::text')
        url = urljoin('http://www.hydronautsdiving.com/', response.request.url)
        agency = "RAID"

        # Check for Dm page due to different element names
        if url != "https://www.hydronautsdiving.com/divemaster-course-koh-tao-scuba-diving/":
            course_card = response.css('div.elementor-element.elementor-element-38ee1f43')
        else:
            course_card = response.css('div.elementor-element.elementor-element-7fd3ab3')


        # Check for title being available, some pages have h2 in stead of h1
        if len(title) == 1:
            name = title.get()
        else:
            name = response.css('h2.elementor-heading-title::text').get()


        # data contains all cards for each course. Scrape from here 
        for data in course_card:
            price_text = data.css('div.elementor-widget-container')
            price = re.search(r'(\d*,\d+)', price_text.get())

            l = ItemLoader(item = DivePriceItem(), selector=data)

            l.add_value('name', name)
            l.add_value('price', price.group(1))
            l.add_value('course_Link', url) 
            l.add_value('agency', agency)
            l.add_value('school', school)
            l.add_value('timestamp', now)
            l.add_value('location', location)


            yield l.load_item()
