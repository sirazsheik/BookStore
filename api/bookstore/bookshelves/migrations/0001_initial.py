# Generated by Django 5.0.6 on 2024-06-27 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('author_name', models.CharField(max_length=100)),
                ('cover_pic', models.CharField(max_length=300)),
            ],
        ),
    ]