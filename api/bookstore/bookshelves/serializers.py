from rest_framework import serializers
from .models import Books

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'

class TopBooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ['id','title','author_name','cover_pic']