from django.urls import path
from .models import *
from .views import *

urlpatterns = [
     path('topbooks/', TopBooks.as_view()),
     path('bookshelves/',BooksListCreate.as_view())
]