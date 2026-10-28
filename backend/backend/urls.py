from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('polls/', include('polls.urls')),
    path('wasHere/', include('wasHere.urls')),
    path('contact/', include('contact.urls')),
    path('resume/', include('resume.urls')),
    path('projects/', include('projects.urls')),
    path('loftusco/', include('loftusco.urls')),
]

# Production media is served by nginx; this only kicks in when DEBUG is on
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
