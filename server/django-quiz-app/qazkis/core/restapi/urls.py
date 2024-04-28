from .views import TestViewset, QuestionViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(R"questions", QuestionViewset, basename="questions")
router.register(R"tests", TestViewset, basename="tests")

urlpatterns = router.urls
