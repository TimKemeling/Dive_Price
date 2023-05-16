# Generated by Django 4.2.1 on 2023-05-10 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="prices",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.TextField(blank=True, max_length=200, null=True)),
                ("price", models.IntegerField(blank=True, null=True)),
                (
                    "course_link",
                    models.TextField(blank=True, max_length=200, null=True),
                ),
                ("agency", models.TextField(blank=True, max_length=10, null=True)),
                ("school", models.TextField(blank=True, max_length=50, null=True)),
                ("timestamp", models.TextField(blank=True, null=True)),
                ("location", models.TextField(blank=True, max_length=100, null=True)),
                ("name_cf", models.CharField(blank=True, max_length=100, null=True)),
                (
                    "location_cf",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                ("school_cf", models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                "db_table": "prices",
                "managed": True,
            },
        ),
    ]
