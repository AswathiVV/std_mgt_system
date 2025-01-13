from rest_framework import serializers
from .models import *

class Todo_serializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'