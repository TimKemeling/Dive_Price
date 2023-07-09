# Generated by Django 4.2.1 on 2023-07-09 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0017_alter_schools_agency_alter_schools_city_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="booking",
            name="comment",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="course",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="date_of_birth",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="date_of_book",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="deniedfor",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="diveschool",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="email",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="first_name",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="last_name",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="agency",
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="course_link",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="level",
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="location",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="name",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="school",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="prices",
            name="timestamp",
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
    ]
