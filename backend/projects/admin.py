from django.contrib import admin

from .models import Project, TextSection
# Register your models here.

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    # Lets the card order be changed straight from the project list
    list_editable = ('order',)

admin.site.register(TextSection)
