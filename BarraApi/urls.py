from django.contrib import admin
from django.urls import path, include , re_path
from pesquisa import views
from pesquisa.api import viewsets 

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1', include('pesquisa.api.urls', ), name = "produtos"),
    path('api/v2', include('pesquisa.api.urls_user'), name = "usuarios"),
    path('view_test/',views.view_test, name = "test_view"),
    path('cadastrar/', viewsets.query),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
] + static(settings.MEDIA_URL , document_root = settings.MEDIA_ROOT)
