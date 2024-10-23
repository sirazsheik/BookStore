from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Books
from .serializers import *

class BooksListCreate(APIView):
    def get(self,request):
        query = Books.objects.all()
        serializer = BooksSerializer(query,many=True)
        return Response(serializer.data)
class TopBooks(APIView):
    def get(self,request):
        query =Books.objects.values('id','title','author_name','cover_pic')[:10]
        serializer = TopBooksSerializer(query,many=True)
        return Response(serializer.data)
