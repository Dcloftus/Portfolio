from django.urls import path
from .views import spool_diameter_view

urlpatterns = [
    path('spool-diameter', spool_diameter_view),
]