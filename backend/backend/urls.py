from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('polls/', include('polls.urls')),
    path('wasHere/', include('wasHere.urls')),
    path('contact/', include('contact.urls')),
]
