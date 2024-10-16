from django.contrib import admin

from .models import Profile, Company, Experience, JobDescription, Education, Skills
# Register your models here.

admin.site.register(Profile)
admin.site.register(Company)
admin.site.register(Experience)
admin.site.register(JobDescription)
admin.site.register(Education)
admin.site.register(Skills)