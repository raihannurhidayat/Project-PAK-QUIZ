from itertools import zip_longest
from django.shortcuts import render, get_object_or_404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Test, Question, Grade
from .restapi.serializers import TestSerializer, QuestionSerializer, GradeSerializer

# Create your views here.

# admin only api


@api_view(['GET', ])
# @permission_classes([permissions.IsAdminUser])
def get_all_test(request):
    responses = []

    tests = Test.objects.all()

    for instance in tests:
        pk = instance.pk

        data = get_test(request, pk=pk, only_data=True)

        # test_serializer = TestSerializer(instance)

        # questions = Question.objects.filter(test_id=pk)
        # questions_serializer = QuestionSerializer(questions, many=True)

        # modified_questions = questions_serializer.data
        # for q in modified_questions:
        #     q.pop("test_id")

        # test_question = test_serializer.data
        # test_question['test_id'] = pk
        # test_question['questions'] = modified_questions

        responses.append(data)

    return Response(responses)


@api_view(['GET', ])
def get_all_result(request):
    responses = []

    grades = Grade.objects.all()

    for instance in grades:
        pk = instance.pk

        data = get_result(request, pk=pk, only_data=True)

        responses.append(data)

    return Response(responses)


# test handler


@api_view(['GET', 'PUT', 'DELETE'])
def test_view(request, pk):
    if request.method == "GET":
        return get_test(request, pk)
    elif request.method == "PUT":
        return update_test(request, pk)
    elif request.method == "DELETE":
        return delete_test(request, pk)


def get_test(request, pk, only_data=False):
    responses = {}

    test = get_object_or_404(Test, pk=pk)
    test_serializer = TestSerializer(test)

    modified_test = test_serializer.data
    modified_test["test_id"] = pk

    questions = Question.objects.filter(test_id=pk)
    questions_serializer = QuestionSerializer(questions, many=True)

    modified_questions = questions_serializer.data
    for q in modified_questions:
        q.pop("test_id")

    responses['Test'] = modified_test
    responses['Questions'] = modified_questions

    if only_data == True:
        return responses

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


# result handler
@api_view(['GET', 'PUT', 'DELETE', ])
def result_handler(request, pk):
    if request.method == "GET":
        return get_result(request, pk)
    elif request.method == "PUT":
        return update_result(request, pk)
    elif request.method == "DELETE":
        return delete_result(request, pk)


def get_result(request, pk, only_data=False):
    result = get_object_or_404(Grade, pk=pk)
    serializer = GradeSerializer(result)

    if only_data == True:
        return serializer.data

    return Response(serializer.data)


def update_result(request, pk):
    instance = get_object_or_404(Grade, pk=pk)
    serializer = GradeSerializer(data=request.data, instance=instance)

    if serializer.is_valid():
        instance.save()

    return get_result(request, pk)


def delete_result(request, pk):
    instance = get_object_or_404(Grade, pk=pk)
    instance.delete()

    return Response({"message": f"Object {pk} deleted succesfully"}, status=status.HTTP_200_OK)


@api_view(['POST', ])
def post_result(request):
    serializer = GradeSerializer(data=request.data)

    if serializer.is_valid():

        # validated_data = serializer.validated_data
        # student_answer = validated_data['student_answer']

        # total_grade = 0

        # questions_answer = Question.objects.filter(
        #     test_id=validated_data['test_id']).values()

        # grade_perquestion = round((100/len(questions_answer)), 2)

        # for (correct_answer, answer) in zip_longest(questions_answer, student_answer, fillvalue=None):
        #     if correct_answer['answer'] == answer:
        #         total_grade += grade_perquestion

        instance = serializer.save()
        pk = instance.pk

        # instance.student_grade = total_grade
        instance.save()

    return get_result(request, pk=pk)
