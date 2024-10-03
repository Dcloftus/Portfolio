from django.urls import path
from . import views

urlpatterns = [
    # ex: /wasHere/
    path("", views.getContact, name="getContact"),
    path('addContact', views.addContact, name='addContact'),
]