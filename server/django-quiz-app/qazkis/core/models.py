from django.db import models

# Create your models here.


class Question(models.Model):
    question = models.TextField()
    option_a = models.TextField()
    option_b = models.TextField()
    option_c = models.TextField()
    option_d = models.TextField()
    answer = models.CharField(max_length=1)

    # def __str__(self):
    #     return Question.pk
