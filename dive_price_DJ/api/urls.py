from django.urls import path
from api import views

urlpatterns = [
    path('api/school-list', views.all_schools.as_view(), name='all_schools'),
    path('api/course-detail', views.courseDetail.as_view(), name='course'),
    path('api/course-overview', views.courseOverview.as_view(), name='course_overview'),
    path('api/school-overview', views.schoolOverview.as_view(), name='school_overview'),
    path('api/schools-by-location', views.SchoolsByLocation.as_view(), name='schools_by_location'),

]