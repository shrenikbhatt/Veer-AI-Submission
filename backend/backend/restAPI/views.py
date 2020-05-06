from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ContactSerializer
from .models import Contact

# Create your views here.

@api_view(['GET', 'POST'])
def contact(request):
    if (request.method == 'GET'):
        items = Contact.objects.all()
        serializer = ContactSerializer(items, many=True)
        return Response(serializer.data)
    elif (request.method == 'POST'):
        serializer = ContactSerializer(data = request.data)
        if serializer.is_valid():
            if (request.data.get('name') != "" or request.data.get('number') != ""):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def random_text(request):
    if (request.method == 'POST'):
        if (request.data.get('text') != "Foo" and request.data.get('text') != 'Bar'):
            return Response({'message': False})
        else:
            return Response({'message': True})
    else:
        content = {'message': 'Does not exist.'}
        return Response(content, status = status.HTTP_404_NOT_FOUND)
        