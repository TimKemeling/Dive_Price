from rest_framework import serializers
from api.models import schools, prices, Booking

class priceSerializer(serializers.ModelSerializer):
    class Meta:
        model = prices
        fields = [
            'id',
            'name',
            'price',
            'course_link',
            'school',
            'location',
            'level',
            'agency',
            'schoolsid_id',
        ]

class schoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = schools
        fields = '__all__'

class bookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
