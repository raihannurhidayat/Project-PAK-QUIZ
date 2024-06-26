from django.conf import settings
from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    # path('test/', views.get_test, name="test"),
    path('debug/get-test/', views.get_all_test),
    path('debug/get-result/', views.get_all_result),
    path('test/create/', views.create_test),
    path('test/<int:pk>/', views.test_view),
    path('test/result/<int:pk>/', views.result_handler),
    path('test/result/post/', views.post_result),
]
