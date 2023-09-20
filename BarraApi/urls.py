from django.contrib import admin
from django.urls import path, include
from pesquisa import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('pesquisa.api.urls')),
    path('view_test/',views.view_test, name = "test_view")
]  
urlpatterns += static(settings.MEDIA_URL , document_root = settings.MEDIA_ROOT)
