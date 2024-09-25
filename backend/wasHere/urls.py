from django.urls import path
from . import views

urlpatterns = [
    # ex: /wasHere/
    path("", views.index, name="index"),
    path('addMark', views.add_mark, name='add_mark'),
]