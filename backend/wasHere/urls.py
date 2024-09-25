from django.urls import path
from . import views

urlpatterns = [
    # ex: /wasHere/
    path("", views.getMarks, name="getMarks"),
    path('addMark', views.addMark, name='addMark'),
]