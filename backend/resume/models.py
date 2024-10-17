from django.db import models

# Create your models here.
class Profile(models.Model):
    profile_text = models.TextField()
    def __str__(self):
        return self.profile_text

class Company(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True, null=True)
    
    def __str__(self):
        return self.name

class Experience(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='experiences')
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    position = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.position} at {self.company.name}"

class JobDescription(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE, related_name='descriptions')
    bullet = models.BooleanField()
    description = models.TextField()

    def __str__(self):
        return self.description

class Education(models.Model):
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    degree = models.CharField(max_length=255)
    school = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.degree} at {self.school}"

class Skills(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name