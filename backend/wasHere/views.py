from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MarksSerializer

from django.shortcuts import render
from django.http import JsonResponse

from .models import Marks

@api_view(['GET'])
def index(request):
    marks = Marks.objects.all()
    json = [{"id": m.id, "name": m.name, "mark_date": m.mark_date} for m in marks]
    return JsonResponse(json, safe=False)

@api_view(['POST'])
def add_mark(request):
    serializer = MarksSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()  # This writes data to the database
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)