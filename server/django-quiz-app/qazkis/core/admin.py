from django.contrib import admin
from django import forms
from . import models


# class AdminGrade(admin.ModelAdmin):
#     fields = ('test_id', 'student_name', 'student_id',
#               'student_answer', 'student_grade', )
#     readonly_fields = ('student_grade', )


# Register your models here.
admin.site.register(models.Test)
admin.site.register(models.Question)
admin.site.register(models.Grade)
