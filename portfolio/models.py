from django.db import models
from django.utils import timezone


# Create your models here.
class Message(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=255)
    message = models.CharField(max_length=500)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
