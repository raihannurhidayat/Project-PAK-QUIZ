from .views import QuestionViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(R"questions", QuestionViewset, basename="questions")

urlpatterns = router.urls
