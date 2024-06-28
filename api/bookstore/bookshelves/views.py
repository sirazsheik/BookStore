from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Books
from .serializers import BooksSerializer

class BooksListCreate(APIView):
    def get(self,request):
        query = Books.objects.all()
        serializer = BooksSerializer(query,many=True)
        return Response(serializer.data)
