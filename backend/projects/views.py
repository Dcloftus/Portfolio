from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.exceptions import NotFound
from collections import defaultdict

from backend.utils import get_s3_project_urls
from .models import Project, TextSection
from .serializers import ProjectSerializer, TextSectionSerializer
# Create your views here.

# API Needs
# Get all Projects
class Projects(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    

# Get Specific Project Details
class ProjectDetails(generics.ListAPIView):
    serializer_class = TextSectionSerializer

    def get(self, request, *args, **kwargs):
        # Retrieve the project name from the URL parameter
        project_name = self.kwargs.get('name')
        
        # Fetch the specified Project instance
        try:
            project = Project.objects.get(name=project_name)
        except Project.DoesNotExist:
            raise NotFound("Project not found.")
        
        # Serialize the project data
        project_data = ProjectSerializer(project).data

        # Get S3 URLs and integrate them inline
        folders = ['logo', 'cover', 'spotlight', 'overflow', 'video']
        s3_urls = get_s3_project_urls(project_name, folders)

        # Fetch all TextSections for the project, ordered by 'order'
        text_sections = TextSection.objects.filter(project=project).order_by('order')
        
        # Group TextSections by `section_type`
        grouped_sections = defaultdict(list)
        for section in text_sections:
            serialized_section = TextSectionSerializer(section).data
            grouped_sections[section.section_type].append(serialized_section)
        
        # Structure the response
        response_data = {
            'project': project_data,
            **s3_urls,  # Inline S3 URLs at top level
            **grouped_sections  # Unpack the grouped sections into the response
        }
        
        return Response(response_data)
