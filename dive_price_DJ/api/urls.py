from django.urls import path
from api import views

urlpatterns = [
    path('api/school-list', views.all_schools.as_view(), name='all_schools'),
    path('api/course-list', views.all_courses.as_view(), name='all_courses'),
    path('api/course-detail', views.courseDetail.as_view(), name='course'),
    path('api/beginner-overview', views.BeginnerOverview.as_view(), name='beginner_overview'),
    path('api/advanced-overview', views.AdvancedOverview.as_view(), name='advanced_overview'),
    path('api/pro-overview', views.ProOverview.as_view(), name='pro_overview'),
    path('api/tech-overview', views.TechOverview.as_view(), name='tech_overview'),
    path('api/fundiving-overview', views.FundivingOverview.as_view(), name='fundiving_overview'),
    path('api/school-overview', views.schoolOverview.as_view(), name='school_overview'),
    path('api/schools-by-location', views.SchoolsByLocation.as_view(), name='schools_by_location'),
    path('api/booking', views.booking.as_view(), name='booking')

]