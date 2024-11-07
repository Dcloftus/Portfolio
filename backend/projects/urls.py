from django.urls import path
from .views import Projects, ProjectDetails

urlpatterns = [
    # /projects/
    path('', Projects.as_view(), name='project-list'),
    path('<str:name>/', ProjectDetails.as_view(), name="project-detail")
]

