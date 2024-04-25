from django.shortcuts import render
from django.http import JsonResponse
from .models import Question

from .forms import NewTestForm


# Create your views here.


def get_question(request):

    question = Question.objects.all()

    question_json = list(question.values())

    return JsonResponse(question_json, safe=False)


def create_question(request):

    if request.method == "POST":
        form = NewTestForm()

        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Data saved successfully'})
        else:
            errors = form.errors.as_json()
            return JsonResponse({'error': errors}, status=400)

    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
