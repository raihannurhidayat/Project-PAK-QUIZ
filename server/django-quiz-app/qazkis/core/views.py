from django.shortcuts import render
from django.http import JsonResponse
from .models import Question


# Create your views here.


def get_question(request):

    question = Question.objects.all()

    question_json = list(question.values())

    return JsonResponse(question_json, safe=False)
