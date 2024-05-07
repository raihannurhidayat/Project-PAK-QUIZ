from rest_framework import serializers
from ..models import Question, Test, Grade


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('name', 'description', 'created_at', 'modified_at', 'closed')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('test_id', 'question', 'option_a', 'option_b',
                  'option_c', 'option_d', 'answer',)


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ('id', 'test_id', 'student_name', 'student_id', 'answers_true', 'answers_false',
                  'student_answer', 'n_cheating', 'student_grade', 'student_grade_final', )
