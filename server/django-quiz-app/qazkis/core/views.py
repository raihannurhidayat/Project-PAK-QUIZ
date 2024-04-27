from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Test, Question
from .restapi.serializers import TestSerializer

# Create your views here.


@api_view(['GET', ])
def get_test(request, pk):
    test = get_object_or_404(Test, pk=pk)
    serializer = TestSerializer(test)

    return Response(serializer.data)


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
