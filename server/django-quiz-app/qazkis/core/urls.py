from django.conf import settings
from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    # path('test/', views.get_test, name="test"),
    path('debug/get-test/', views.get_all_test),
    path('test/create/', views.create_test),
    path('test/<int:pk>/', views.test_view),
    path('test/result/<int:pk>/', views.get_result),
    path('test/result/post/', views.post_result),
]
