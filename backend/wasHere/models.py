from django.db import models

# Create your models here.
class Marks(models.Model):
    name = models.CharField(max_length=200, unique=True)
    mark_date = models.DateField("date marked")
    
    def __str__(self):
        return self.name