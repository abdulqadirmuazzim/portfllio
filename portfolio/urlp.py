from django.urls import path

from . import views

# important, django looks for this by default

urlpatterns = [path("", views.home)]
