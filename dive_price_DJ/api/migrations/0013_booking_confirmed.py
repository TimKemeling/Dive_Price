# Generated by Django 4.2.1 on 2023-06-12 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0012_alter_booking_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="booking",
            name="confirmed",
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]