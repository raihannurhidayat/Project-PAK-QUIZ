from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Test, Question
from .restapi.serializers import TestSerializer, QuestionSerializer

# Create your views here.


@api_view(['GET', ])
def get_test(request, pk):
    responses = {}

    test = get_object_or_404(Test, pk=pk)
    test_serializer = TestSerializer(test)

    questions = Question.objects.filter(test_id=pk)
    questions_serializer = QuestionSerializer(questions, many=True)

    responses['Test'] = test_serializer.data
    responses['Questions'] = questions_serializer.data

    return Response(responses)


@api_view(['POST', ])
def create_test(request):
    serializer = TestSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST', ])
def update_test(request, pk):
    test = get_object_or_404(Test, pk=pk)
    serializer = TestSerializer(data=request.data, instance=test)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE', ])
def delete_test(request, pk):
    test = get_object_or_404(Test, pk=pk)
    test.delete()

    return Response("Object deleted succesfully", status=status.HTTP_204_NO_CONTENT)


@api_view(['POST', ])
def add_questions(request, pk):

    for question in request.data:
        question.update({'test_id': pk})

    questions = QuestionSerializer(data=request.data, many=True)

    if questions.is_valid():
        questions.save()

    posted_question = Question.objects.filter(test_id=pk)
    serializer = QuestionSerializer(posted_question, many=True)

    return Response(serializer.data)
