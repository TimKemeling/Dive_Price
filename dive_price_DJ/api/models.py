from django.db import models
from django.contrib import admin
import uuid



class schools(models.Model):
    id = models.AutoField(auto_created=True, db_column='id', primary_key=True)
    school_name = models.CharField(max_length=50, unique=True)
    agency = models.CharField(blank=True, null=True, max_length=10)
    website_link = models.URLField(blank=True, null=True, max_length=200)
    country = models.CharField(blank=True, null=True, max_length=100)
    city = models.CharField(blank=True, null=True, max_length=100)
    neighbourhood = models.CharField(blank=True, null=True, max_length=100)
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
        verbose_name_plural = 'schools'

class Courses(models.Model):
    name = models.CharField(blank=True, null=True, max_length=200)
    price = models.IntegerField(blank=True, null=True)
    course_link = models.CharField(blank=True, null=True, max_length=200)
    agency = models.CharField(blank=True, null=True, max_length=10)
    schoolsid = models.ForeignKey(schools, blank=True, null=True, on_delete=models.CASCADE)
    school = models.CharField(blank=True, null=True, max_length=50)
    timestamp = models.CharField(blank=True, null=True, max_length=75)
    location = models.CharField(blank=True, null=True, max_length=100)
    level = models.CharField(blank=True, null=True, max_length=15)


    class Meta:
        managed = True
        db_table = 'prices'
        verbose_name_plural = 'Courses'


class Booking(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(blank=True, null=True, max_length=200)
    last_name = models.CharField(blank=True, null=True, max_length=200)
    course = models.CharField(blank=True, null=True, max_length=200)
    diveschool = models.CharField(blank=True, null=True, max_length=200)
    date_of_birth = models.CharField(blank=True, null=True, max_length=200)
    date_of_book = models.CharField(blank=True, null=True, max_length=200)
    date_booked = models.CharField(blank=True, null=True, max_length=200)
    email = models.CharField(blank=True, null=True, max_length=200)
    comment = models.CharField(blank=True, null=True, max_length=200)
    confirmed = models.BooleanField(blank=False, null=False, default=False)
    denied = models.BooleanField(blank=False, null=False, default=False)
    deniedfor = models.CharField(blank=True, null=True, max_length=200)


    class Meta:
        verbose_name_plural = 'Bookings'
        db_table = 'bookings'
        ordering = ["-date_booked"]
