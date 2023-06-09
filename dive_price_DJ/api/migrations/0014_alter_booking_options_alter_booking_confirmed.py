# Generated by Django 4.2.1 on 2023-06-12 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0013_booking_confirmed"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="booking",
            options={"verbose_name_plural": "Bookings"},
        ),
        migrations.AlterField(
            model_name="booking",
            name="confirmed",
            field=models.BooleanField(default=False),
        ),
    ]
