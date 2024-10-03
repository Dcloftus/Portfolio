from django.urls import path
from . import views

urlpatterns = [
    # ex: /polls/
    path("", views.index, name="index"),
    # ex: /polls/
    path("<int:question_id>/", views.detail, name="detail"),
    # ex: /polls/
    path("<int:question_id>/results/", views.results, name="index"),
    # ex: /polls/
    path("<int:question_id>/vote/", views.vote, name="index"),
]