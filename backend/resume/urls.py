from django.urls import path
from . import views

urlpatterns = [
    # /profile/
    path("profile", views.getProfile, name="getProfile"),
    path("workExperience", views.getWorkExperience, name="getWorkExperience"),
    path("education", views.getEducation, name="getEducation"),
    path("skills", views.getSkills, name="getSkills"),
    path("download", views.getPDFLink, name="getPDFLink"),
]
