from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    # path('test/', views.get_test, name="test"),
    path('test/create/', views.create_test),
    path('test/<int:pk>/', views.test_view),
]
