from rest_framework import serializers
from .models import Marks

class MarksSerializer(serializers.ModelSerializer):
  class Meta:
    model = Marks
    fields = ['name', 'mark_date']