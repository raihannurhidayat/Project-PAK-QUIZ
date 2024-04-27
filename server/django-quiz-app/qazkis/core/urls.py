from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    # path('test/', views.get_test, name="test"),
    path('test/<int:pk>/', views.get_test, name="test_detail"),
    path('test/create/', views.create_test, name="test_create"),
    path('test/<int:pk>/update/', views.update_test, name="update_test"),
    path('test/<int:pk>/delete/', views.delete_test, name="delete_test"),
]
