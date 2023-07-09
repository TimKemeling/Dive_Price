from django.contrib import admin

from .models import schools, Courses, Booking


class CourseInline(admin.StackedInline):
    model = Courses
    extra = 5

class SchoolAdmin(admin.ModelAdmin):
    fieldsets = [
        ("School info", {"fields": ["school_name", "country", "city", "neighbourhood", "agency" ]}),
        ("School site and description", {"fields": ["website_link", "description", "tagline" ]}),
        ("School vibe", {"fields": ["vibe_fun", "vibe_family", "vibe_backpack", "vibe_quiet", "vibe_serious" ]}),
        ("School price", {"fields": ["price_1", "price_2", "price_3" ]}),
        ("School size", {"fields": ["size_1", "size_2", "size_3" ]}),
        ("School age", {"fields": ["age_1", "age_2", "age_3" , "age_4"]}),
        ("School pro", {"fields": ["pro_1", "pro_2", "pro_3" ]}),
        ("School other", {"fields": ["next_day_book", "beach"]})
    ]
    list_display = ["school_name"]
    inlines = [CourseInline]

class Courseadmin(admin.ModelAdmin):
    list_display = ["school", "name", "price", "level"]

class BookingAdmin(admin.ModelAdmin):
    list_display = ["id", "first_name", "last_name", "diveschool", "course", "date_booked"]


admin.site.register(schools, SchoolAdmin)
admin.site.register(Courses, Courseadmin)
admin.site.register(Booking, BookingAdmin)
