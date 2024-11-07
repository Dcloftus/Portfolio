from rest_framework import serializers
from .models import Project, TextSection
from backend.utils import get_s3_project_urls

class ProjectSerializer(serializers.ModelSerializer):
    cover = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'cover']

    def get_cover(self, obj):
        # Define which folders you want to retrieve images from
        folders = ["cover"]
        
        # Call the utility function with the project name and folders
        cover_images = get_s3_project_urls(obj.name, folders)
        
        return cover_images.get("cover")

class TextSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextSection
        fields = ['id', 'section_type', 'text', 'order']
