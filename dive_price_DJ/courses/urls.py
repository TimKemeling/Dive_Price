from django.urls import path
from . import views

app_name = "courses"
urlpatterns = [
    path("nosearch", views.nosearch, name="nosearch"),
    path("booking", views.Bookingview.as_view(), name="booking"),
    path("search", views.SearchView.as_view(), name="search" ),
    path("all_courses", views.all_courses.as_view(), name="all_courses"),
    path("<str:course_school>/<str:course_name>/<course_id>", views.course, name="course"),
    path("", views.courses, name="courses"),
]