from ..models import Question, Test
from .serializers import QuestionSerializer, TestSerializer
from rest_framework import viewsets, generics


class TestViewset(viewsets.ModelViewSet):
    serializer_class = TestSerializer
    queryset = Test.objects.all()


class QuestionViewset(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
