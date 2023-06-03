from django.db import models

class schools(models.Model):
    id = models.AutoField(auto_created=True, db_column='id', primary_key=True)
    school_name = models.TextField(max_length=50, unique=True)
    agency = models.TextField(blank=True, null=True, max_length=10)
    website_link = models.URLField(blank=True, null=True, max_length=200)
    country = models.TextField(blank=True, null=True, max_length=100)
    city = models.TextField(blank=True, null=True, max_length=100)
    neighbourhood = models.TextField(blank=True, null=True, max_length=100)
    description = models.TextField(blank=True, null=True, max_length=750)
    tagline = models.TextField(blank=True, null=True, max_length=150)

    vibe_fun = models.BooleanField(blank=True, null=True, default=True)
    vibe_family = models.BooleanField(blank=True, null=True, default=False)
    vibe_backpack = models.BooleanField(blank=True, null=True, default=True)
    vibe_quiet = models.BooleanField(blank=True, null=True, default=False)
    vibe_serious = models.BooleanField(blank=True, null=True, default=False)

    price_1 = models.BooleanField(blank=True, null=True, default=False)
    price_2 = models.BooleanField(blank=True, null=True, default=True)
    price_3 = models.BooleanField(blank=True, null=True, default=False)

    size_1 = models.BooleanField(blank=True, null=True, default=False)
    size_2 = models.BooleanField(blank=True, null=True, default=True)
    size_3 = models.BooleanField(blank=True, null=True, default=False)

    age_1 = models.BooleanField(blank=True, null=True, default=True)
    age_2 = models.BooleanField(blank=True, null=True, default=False)
    age_3 = models.BooleanField(blank=True, null=True, default=False)
    age_4 = models.BooleanField(blank=True, null=True, default=False)

    pro_1 = models.BooleanField(blank=True, null=True, default=False)
    pro_2 = models.BooleanField(blank=True, null=True, default=True)
    pro_3 = models.BooleanField(blank=True, null=True, default=False)

    next_day_book = models.BooleanField(blank=True, null=True, default=False)

    beach = models.BooleanField(blank=True, null=True, default=True)


    class Meta:
        managed = True
        db_table = 'schools'

class prices(models.Model):
    name = models.TextField(blank=True, null=True, max_length=200)
    price = models.IntegerField(blank=True, null=True)
    course_link = models.TextField(blank=True, null=True, max_length=200)
    agency = models.TextField(blank=True, null=True, max_length=10)
    schoolsid = models.ForeignKey(schools, blank=True, null=True, on_delete=models.CASCADE)
    school = models.TextField(blank=True, null=True, max_length=50)
    timestamp = models.TextField(blank=True, null=True)
    location = models.TextField(blank=True, null=True, max_length=100)
    level = models.TextField(blank=True, null=True, max_length=15)


    class Meta:
        managed = True
        db_table = 'prices'
