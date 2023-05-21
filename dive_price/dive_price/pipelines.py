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
        course_link TEXT,
        agency TEXT,
        school TEXT,
        timestamp TEXT,
        location TEXT,
        name_cf TEXT,
        school_cf TEXT,
        location_cf TEXT
        );""")


# conn.execute("INSERT INTO CAMPAIGNS VALUES (?, ?, ?, ?)", (None, campaign_name, campaign_username, campaign_password))

    def process_item(self, item, spider):

        self.cur.execute("""INSERT OR IGNORE INTO prices VALUES (?,?,?,?,?,?,?,?,?,?,?)""",
                         (None,
                          item["name"], 
                          item["price"], 
                          item["course_Link"],
                          item["agency"],
                          item["school"], 
                          item["timestamp"],
                          item["location"],
                          None,
                          None,
                          None,))
        self.con.commit()
        return item
