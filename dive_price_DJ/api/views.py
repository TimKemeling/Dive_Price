from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from api.models import schools, Courses, Booking
from api.serializers import schoolSerializer, priceSerializer, bookingSerializer

from datetime import datetime, date
from api.django_email_server import send_email
from django.template.loader import render_to_string
    
class all_schools(generics.ListAPIView):
    queryset = schools.objects.all()
    serializer_class = schoolSerializer

    def school_list(self, request):
        if request.method == 'GET':
            queryset =  self.get_queryset()
            serializer = schoolSerializer(queryset, many=True)
            return Response(serializer.data)


class SchoolsByLocation(APIView):
    def get(self, request):
        course_list = schools.objects.filter(location__icontains = 'Koh Tao')
        serializer = schoolSerializer(course_list, many=True)   
        return Response(serializer.data)
    

class courseDetail(APIView):
    def get(self, request):
        course = Courses.objects.get(pk=100)
        serializer = priceSerializer(course)
        return Response(serializer.data)
    
class all_courses(generics.ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = priceSerializer

    def course_list(self, request):
        if request.method == 'GET':
            queryset =  self.get_queryset()
            serializer = priceSerializer(queryset, many=True)
            return Response(serializer.data)    
    
class BeginnerOverview(APIView):
    def get(self, request):
        course_list = Courses.objects.filter(level = 'beginner')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class AdvancedOverview(APIView):
    def get(self, request):
        course_list = Courses.objects.filter(level = 'advanced')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class ProOverview(APIView):
    def get(self, request):
        course_list = Courses.objects.filter(level = 'pro')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class TechOverview(APIView):
    def get(self, request):
        course_list = Courses.objects.filter(level = 'tech')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class FundivingOverview(APIView):
    def get(self, request):
        course_list = Courses.objects.filter(level = 'fundiving')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    

class CoursesBySchool(ListAPIView):
    serializer_class = priceSerializer

    def get_queryset(self):
        schoolid = self.kwargs.get('pk')
        queryset = Courses.objects.filter(schoolsid_id = schoolid)
        return queryset

    
class booking(ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = bookingSerializer
    

    def perform_create(self, serializer):
        obj = serializer.save()
        name = obj.first_name + ' ' + obj.last_name

        dob = datetime.strptime(obj.date_of_birth, '%Y-%m-%d')

        def age(birthdate):
            today = date.today()
            age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
            return age

        booker_age = age(dob)

        html_message_center = render_to_string("center_email.html", context={
            'name' : name,
            'course' : obj.course,
            'dob' : obj.date_of_birth,
            'age' : booker_age,
            'email' : obj.email,
            'bookdate' : obj.date_of_book,
            'comment' : obj.comment,
            'reference' : obj.id
        })

        html_message_customer = render_to_string("customer_email.html", context={
            'name' : name,
            'course' : obj.course,
            'dob' : obj.date_of_birth,
            'age' : booker_age,
            'email' : obj.email,
            'bookdate' : obj.date_of_book,
            'comment' : obj.comment,
            'reference' : obj.id
        })

        subject = 'Diveprices.com booking request'
        custrecipient = obj.email
        centerrecipient = 'tmkcrypto@gmail.com'
        send_email(subject, centerrecipient, html_message_center)
        send_email(subject, custrecipient, html_message_customer)
        

        return super().perform_create(serializer)

class bookingconfirm(RetrieveUpdateAPIView):
    serializer_class = bookingSerializer  
    queryset = Booking.objects.all()
    lookup_field = 'id'

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), pk=self.kwargs["pk"])
        self.check_object_permissions(self.request, obj)
        return obj

       
    def perform_update(self, serializer):
        obj = self.get_object()
        name = obj.first_name + ' ' + obj.last_name

        dob = datetime.strptime(obj.date_of_birth, '%Y-%m-%d')

        def age(birthdate):
            today = date.today()
            age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
            return age

        booker_age = age(dob)

        if self.request.data['confirmed']: 
            html_message = render_to_string("customer_confirm_email.html", context={
                'name' : name,
                'course' : obj.course,
                'dob' : obj.date_of_birth,
                'age' : booker_age,
                'email' : obj.email,
                'bookdate' : obj.date_of_book,
                'comment' : obj.comment,
                'reference' : obj.id
            })

            subject = 'Diveprices.com booking request'
            recipient = obj.email
            send_email(subject, recipient, html_message)

        else: 
            html_message = render_to_string("customer_deny_email.html", context={
                'name' : name,
                'course' : obj.course,
                'dob' : obj.date_of_birth,
                'age' : booker_age,
                'email' : obj.email,
                'bookdate' : obj.date_of_book,
                'comment' : obj.comment,
                'deniedfor' : self.request.data['deniedfor'],
                'reference' : obj.id
            })

            subject = 'Diveprices.com booking request'
            recipient = obj.email
            send_email(subject, recipient, html_message)
            

        return super().perform_update(serializer)

    