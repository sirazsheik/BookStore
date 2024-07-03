from django.db import models

class Books(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    title = models.CharField(max_length=255)
    read_status=models.CharField(max_length=100,null=True)
    rating=models.IntegerField(default=0)
    author_name = models.CharField(max_length=100)
    cover_pic = models.CharField(max_length=300)
