# Generated by Django 4.2.1 on 2023-06-02 05:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0009_rename_schools_id_prices_schoolsid"),
    ]

    operations = [
        migrations.AddField(
            model_name="prices",
            name="level",
            field=models.TextField(blank=True, max_length=15, null=True),
        ),
    ]
