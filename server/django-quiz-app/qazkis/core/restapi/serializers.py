from rest_framework import serializers
from ..models import Question, Test, Grade


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('name', 'description', 'created_at', 'modified_at', 'closed')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('question', 'option_a', 'option_b',
                  'option_c', 'option_d', 'answer',)


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ('test_id', 'student_name', 'student_id',
                  'student_answer', 'student_grade', )
