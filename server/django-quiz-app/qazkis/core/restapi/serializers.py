from rest_framework import serializers
from ..models import Question, Test


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('name', 'description', 'created_at', 'modified_at', 'closed')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('test_id', 'question', 'option_a', 'option_b',
                  'option_c', 'option_d', 'answer',)
