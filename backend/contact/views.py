from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer
from django.db import IntegrityError

from django.http import JsonResponse

from .models import Contact

@api_view(['POST'])
def addContact(request):
    try:
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()  # This writes data to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except IntegrityError:
        return JsonResponse({'error': 'Error message here'}, status=status.HTTP_400_BAD_REQUEST)