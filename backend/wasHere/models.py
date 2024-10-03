from django.db import models

# Create your models here.
class Marks(models.Model):
    name = models.CharField(max_length=200, unique=True)
    location_top = models.DecimalField(max_digits=5, decimal_places=2)
    location_left = models.DecimalField(max_digits=5, decimal_places=2)
    location_rotation = models.DecimalField(max_digits=5, decimal_places=2)
    font_weight = models.IntegerField()
    mark_date = models.DateField("date marked")
    
    def __str__(self):
        return self.name