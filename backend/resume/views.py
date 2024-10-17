from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer, CompanySerializer, ExperienceSerializer, JobDescriptionSerializer, EducationSerializer, SkillsSerializer
from django.db.models import Prefetch

from .models import Profile, Company, Experience, JobDescription, Education, Skills

# API Needs
# Get Profile All Entries
@api_view(['GET'])
def getProfile(request):
    profile = Profile.objects.all()
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)

# GET Work Experience All positions with company info and descriptions
@api_view(['GET'])
def getWorkExperience(request):
    experiences = Experience.objects.select_related('company').prefetch_related(
        Prefetch('descriptions', queryset=JobDescription.objects.order_by('bullet'))
    ).all()
    serializer = ExperienceSerializer(experiences, many=True)
    return Response(serializer.data)

# GET all Education Entries
@api_view(['GET'])
def getEducation(request):
    education = Education.objects.all()
    serializer = EducationSerializer(education, many=True)
    return Response(serializer.data)

# GET all Skills
@api_view(['GET'])
def getSkills(request):
    skills = Skills.objects.all()
    serializer = SkillsSerializer(skills, many=True)
    return Response(serializer.data)