from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254, unique=True)
    message = models.TextField()
    sent_date_utc = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name