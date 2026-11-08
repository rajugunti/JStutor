
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from .models import Questions
from .serializers import QuestionSerializer


class QuestionListAPIView(APIView):

    def get(self, request):
        questions = Questions.objects.all()

        serializer = QuestionSerializer(questions, many=True)

        return Response(
            serializer.data,
            status=HTTP_200_OK
        )
