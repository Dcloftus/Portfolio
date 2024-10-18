from rest_framework import serializers
from .models import Profile, Company, Experience, JobDescription, Education, Skills

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'profile_text']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'location']

class JobDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobDescription
        fields = ['id', 'bullet', 'description']

class ExperienceSerializer(serializers.ModelSerializer):
    company = CompanySerializer()  # Nest the Company data
    job_descriptions = JobDescriptionSerializer(many=True, source='descriptions')  # Source is used for reverse relationships

    class Meta:
        model = Experience
        fields = ['id', 'company', 'start_date', 'end_date', 'position', 'job_descriptions']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'start_date', 'end_date', 'degree', 'school']

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ['name']