from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Test, Question
from .restapi.serializers import TestSerializer, QuestionSerializer

# Create your views here.

# test handler


@api_view(['GET', 'PUT', 'DELETE'])
def test_view(request, pk):
    if request.method == "GET":
        return get_test(request, pk)
    elif request.method == "PUT":
        return update_test(request, pk)
    elif request.method == "DELETE":
        return delete_test(request, pk)


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
    test_serializer = TestSerializer(data=request.data[0])

    if test_serializer.is_valid():
        test = test_serializer.save()
        pk = test.pk

    add_questions(request.data[1], pk=pk)

    return get_test(request, pk=pk)


def update_test(request, pk):
    test = get_object_or_404(Test, pk=pk)

    test_serializer = TestSerializer(data=request.data[0], instance=test)

    if test_serializer.is_valid():
        test_serializer.save()

    add_questions(request.data[1], pk=pk, delete_existing=True)

    return get_test(request, pk)


def delete_test(request, pk):
    test = get_object_or_404(Test, pk=pk)
    test.delete()

    return Response({"message": f"Object {pk} deleted succesfully"}, status=status.HTTP_200_OK)


def add_questions(request: list, pk, delete_existing=False):

    for question in request:
        question.update({'test_id': pk})

    questions = QuestionSerializer(data=request, many=True)

    if questions.is_valid():
        if delete_existing == True:
            objects = Question.objects.filter(test_id=pk)
            objects.delete()

        questions.save()

    posted_question = Question.objects.filter(test_id=pk)
    serializer = QuestionSerializer(posted_question, many=True)

    return serializer.data
