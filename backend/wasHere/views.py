from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MarksSerializer
from django.db import IntegrityError

from django.http import JsonResponse

from .models import Marks

@api_view(['GET'])
def getMarks(request):
    marks = Marks.objects.all()
    json = [{"id": m.id, "name": m.name, "mark_date": m.mark_date, "font_weight": m.font_weight, "location_top": m.location_top, "location_left": m.location_left, "location_rotation": m.location_rotation} for m in marks]
    return JsonResponse(json, safe=False)

@api_view(['POST'])
def addMark(request):
    try:
        serializer = MarksSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()  # This writes data to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except IntegrityError:
        return JsonResponse({'error': 'This mark has already been made!'}, status=status.HTTP_400_BAD_REQUEST)