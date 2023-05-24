from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import schools, prices
from api.serializers import schoolSerializer, priceSerializer

@api_view(['GET', 'POST'])
def school_list(request):
    if request.method == 'GET':
        School_list = schools.objects.all()
        serializer = schoolSerializer(School_list, many=True)
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
    
class courseOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(name__icontains = 'open water')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    

class schoolOverview(APIView):
    def get(self, request):
        course_list = prices.objects.filter(school__icontains = 'black turtle dive')
        serializer = priceSerializer(course_list, many=True)   
        return Response(serializer.data)
    
