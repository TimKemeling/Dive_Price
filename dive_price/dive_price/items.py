# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from itemloaders.processors import TakeFirst, MapCompose
from w3lib.html import remove_tags

def clean_name(value):
    return value.replace("PADI",'').replace("SSI",'').replace("AWARE",'').replace("Koh Tao",'').replace("Course",'').replace("RAID",'').strip()

def clean_price(value):
    value = value.replace('฿', '').replace(',', '').strip()
    if '/' in value:
        value = value.split()[0]

    return int(value)


class DivePriceItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field(input_processor = MapCompose(remove_tags, clean_name), output_processor = TakeFirst())
    price = scrapy.Field(input_processor = MapCompose(remove_tags, clean_price), output_processor = TakeFirst())
    course_Link = scrapy.Field(output_processor = TakeFirst())
    agency = scrapy.Field(output_processor = TakeFirst())
    school = scrapy.Field(output_processor = TakeFirst())
    timestamp = scrapy.Field(output_processor = TakeFirst())
    location = scrapy.Field(output_processor = TakeFirst())


