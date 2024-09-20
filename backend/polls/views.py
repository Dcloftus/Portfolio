from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from .models import Question

# Create your views here.
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    questions = [{"id": q.id, "question_text": q.question_text, "pub_date": q.pub_date} for q in latest_question_list]
    return JsonResponse(questions, safe=False)

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)