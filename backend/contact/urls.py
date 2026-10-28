from django.urls import path
from . import views

urlpatterns = [
    # Submissions are read in Django admin, not over the public API
    path('addContact', views.addContact, name='addContact'),
]