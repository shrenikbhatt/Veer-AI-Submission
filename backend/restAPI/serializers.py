from rest_framework import serializers
from .models import Contact

# Create serializers for easy parsing of data 
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'number']
