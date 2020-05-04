from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ContactSerializer
from .models import Contact

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('name')
    serializer_class = ContactSerializer

@api_view(['POST'])
def random_text(request):
    if (request.method == 'POST'):
        if (request.data.get('text') != "foo" and request.data.get('text') != 'bar'):
            return Response({'message': False})
        else:
            return Response({'message': True})
    else:
        content = {'message': 'Does not exist.'}
        return Response(content, status = status.HTTP_404_NOT_FOUND)
        