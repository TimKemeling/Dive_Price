from django.db import models

class prices(models.Model):
    name = models.TextField(blank=True, null=True, max_length=200)
    price = models.IntegerField(blank=True, null=True)
    course_link = models.TextField(blank=True, null=True, max_length=200)
    agency = models.TextField(blank=True, null=True, max_length=10)
    school = models.TextField(blank=True, null=True, max_length=50)
    timestamp = models.TextField(blank=True, null=True)
    location = models.TextField(blank=True, null=True, max_length=100)
    name_cf = models.CharField(blank=True, null=True, max_length=100)
    location_cf = models.CharField(blank=True, null=True, max_length=100)
    school_cf = models.CharField(blank=True, null=True, max_length=100)

    class Meta:
        managed = False
        db_table = 'prices'

class schools(models.Model):
    school_name = models.TextField(blank=True, null=True, max_length=50)
    agency = models.TextField(blank=True, null=True, max_length=10)
    website_link = models.URLField(blank=True, null=True, max_length=200)
    location = models.TextField(blank=True, null=True, max_length=100)
    school_name_cf = models.CharField(blank=True, null=True, max_length=100)
    location_cf = models.CharField(blank=True, null=True, max_length=100)
    
    class Meta:
        managed = True
        db_table = 'schools'
