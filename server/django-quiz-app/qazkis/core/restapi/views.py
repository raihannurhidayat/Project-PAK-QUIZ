from ..models import Question
from .serializers import QuestionSerializer
from rest_framework import viewsets, generics


class QuestionViewset(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
