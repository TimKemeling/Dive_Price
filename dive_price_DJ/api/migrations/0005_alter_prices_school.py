# Generated by Django 4.2.1 on 2023-06-01 09:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_remove_prices_location_cf_remove_prices_name_cf_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="prices",
            name="school",
            field=models.ForeignKey(
                blank=True,
                max_length=50,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.schools",
            ),
        ),
    ]
