from django.contrib import admin

from .models import schools, prices, Booking


admin.site.register(schools)
admin.site.register(prices)
admin.site.register(Booking)
