# Generated by Django 4.2.1 on 2023-06-02 02:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0008_prices_schools_id"),
    ]

    operations = [
        migrations.RenameField(
            model_name="prices",
            old_name="schools_id",
            new_name="schoolsid",
        ),
    ]