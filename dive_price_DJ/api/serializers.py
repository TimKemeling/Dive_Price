from rest_framework import serializers
from api.models import schools, prices

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
        ]

class schoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = schools
        fields = '__all__'