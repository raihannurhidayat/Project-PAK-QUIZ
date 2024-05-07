from django.db import models

# Create your models here.


class Test(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    closed = models.BooleanField(default=False)


class Question(models.Model):
    test_id = models.ForeignKey(
        Test, related_name="questions", on_delete=models.CASCADE)
    question = models.TextField()
    option_a = models.TextField()
    option_b = models.TextField()
    option_c = models.TextField()
    option_d = models.TextField()
    answer = models.CharField(max_length=1)


class Grade(models.Model):
    test_id = models.ForeignKey(
        Test, related_name="grades", on_delete=models.CASCADE)
    student_name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=50, blank=True, null=True)
    student_answer = models.JSONField(blank=True, null=True)
    student_grade = models.IntegerField(default=0)
