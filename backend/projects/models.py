from django.db import models

# Create your models here.
#=====================================================
#= Project Overview
#=====================================================

#Project
# name (This is also the folder name in S3)
# description (Limit this to the amount of characters allowed in the carrosol on the projects overview page ~150 char)
class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    def __str__(self):
        return self.name

#=====================================================
#= Project Details
#=====================================================

class TextSection(models.Model):
    SECTION_CHOICES = [
        ('main_description', 'Main Description'),
        ('image_description', 'Image Description'),
        ('extra_detail', 'Extra Detail'),
    ]
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='text_sections')
    section_type = models.CharField(max_length=20, choices=SECTION_CHOICES)
    text = models.TextField()
    order = models.PositiveIntegerField(editable=False)

    def save(self, *args, **kwargs):
        # If order is not already set, calculate the next order value for this section_type
        if not self.order:
            last_order = TextSection.objects.filter(
                project=self.project,
                section_type=self.section_type
            ).aggregate(models.Max('order'))['order__max'] or 0
            self.order = last_order + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.project.name}: {self.section_type.capitalize()} ({self.order})"

# # Description (one to many)
# class Description(models.Model):
#     project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='descriptions')
#     description = models.TextField()

#     def __str__(self):
#         return self.description

# # Image Description (one to many)
# class ImageDescription(models.Model):
#     project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='imageDescriptions')
#     description = models.TextField()

#     def __str__(self):
#         return self.description

# # Extra detail (one to many)
# class ExtraDetails(models.Model):
#     project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='extraDetails')
#     detail = models.TextField()

#     def __str__(self):
#         return self.description
