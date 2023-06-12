from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from api.models import schools, prices, Booking
from api.serializers import schoolSerializer, priceSerializer, bookingSerializer
    
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
        course = prices.objects.get(pk=100)
        serializer = priceSerializer(course)
        return Response(serializer.data)
    
class all_courses(generics.ListAPIView):
    queryset = prices.objects.all()
    serializer_class = priceSerializer

    def course_list(self, request):
        if request.method == 'GET':
            queryset =  self.get_queryset()
            serializer = priceSerializer(queryset, many=True)
            return Response(serializer.data)    
    
class BeginnerOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(level = 'beginner')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class AdvancedOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(level = 'advanced')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class ProOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(level = 'pro')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class TechOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(level = 'tech')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class FundivingOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(level = 'fundiving')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    

class schoolOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(school__icontains = 'black turtle dive')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
class booking(ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = bookingSerializer

class bookingaccept(RetrieveUpdateAPIView):  #READ UPDATEAPIVIEW DOCS!!
    serializer_class = bookingSerializer  
    queryset = Booking.objects.all()
    lookup_field = 'id'

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), pk=self.kwargs["pk"])
        self.check_object_permissions(self.request, obj)
        return obj

       
    def put(self, request):
        print('somethiing')
        return super().put(request)
    
    # PUT METHOD IS WORKING ON DIRECT API LINK IN BROWSER, NEED TO CHANGE VALUE IMMEDIATELY WHEN CALL IS MADE
    # CANNOT MAKE PUT REQUEST WITH HTML LINK TROUGH EMAIL, ONLY WORKS WITH BUTTON 
    # MAKE PUT HAPPEN AUTOMATICALLY AND THIS WORKS
    

# class bookingdeny(UpdateAPIView):  #READ UPDATEAPIVIEW DOCS!!
#     queryset = booking.objects.all()

    