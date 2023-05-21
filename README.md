# DivePrices.com

## Table of contents
- [The idea](#The-idea) 
- [How does it work](#how-does-it-work)
- [What did I use](#what-did-i-use)

## The issue

Anyone that loves scuba diving and traveling has at some point spent time searching for pricing in different areas and with different schools.
For me, this gets annoying when you have 100 tabs from different diveschools open trying to compare them.
Enter: Diveprices.com

## The idea

Diveprices.com is designed as a website that collects scuba diving price data and displays it in a single place.
In one quick look you can find the cheapest, most expensive and any other course you want to know more about. 
Search by location, school or course to get an overview of courses available and prices.

## How does it work?

Data gets collected from several scuba websites and put into a central database. In the database there's some cleaning and restructuring before storage.
The website than requests that data depending on the page being shown. Calculations are done on the backend before being pushed to different front end templates.


## What did I use?

Data is collected with Dcrapy, a python webscraping framework. There is different spiders(scrapers) for different websites. A multiwebsite scraper is in the works but not completed yet.
Once the data is collected it goes trough a scrapy pipeline which cleans the data to look a little nicer and then it gets stored in a sqlite database.
Some of the data after this needs to be restructured to be usable on the website so some SQL scripting helps with this. 

The website itself is built on Django, a pyhton web framework. Django takes the database and trough views(functions to query database info) and templates eventually displays it all on the webpages.
Some logic is applied in the templates themselves as well, trough Django's own template language.
This may at some point change to a front end development framework and a slightly different look, but at this point it is not neccesary.


