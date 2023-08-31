from django.urls import path
from . import views

urlpatterns = [
    path('',views.list, name='lista'),
    path('get_suggestions/', views.get_suggestions, name='get_suggestions'),
]


