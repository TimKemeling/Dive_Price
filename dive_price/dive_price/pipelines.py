import sqlite3

class DivePricePipeline:
    def __init__(self):
        self.con = sqlite3.connect('Diveprices.db')
        self.cur = self.con.cursor()
        self.create_table()

    def create_table(self):
        self.cur.execute("""CREATE TABLE IF NOT EXISTS prices(
        id INTEGER NOT NULL PRIMARY KEY,
        name TEXT,
        price REAL,
        school TEXT,
        course_link TEXT,
        agency TEXT,
        timestamp TEXT,
        location TEXT,
        schoolsid_id REAL
        );""")


    def process_item(self, item, spider):

        self.cur.execute("""INSERT OR IGNORE INTO prices VALUES (?,?,?,?,?,?,?,?,?)""",
                         (None,
                          item["name"], 
                          item["price"], 
                          item["course_Link"],
                          item["agency"],
                          item["timestamp"],
                          item["location"],
                          item["school"], 
                          None))
        self.con.commit()
        return item
