from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    path('get/', views.get_question, name="get"),
    path('create/', views.create_question, name="create")
]
