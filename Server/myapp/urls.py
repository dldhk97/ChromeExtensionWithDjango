from django.conf.urls import url

from . import views
from django.urls import path, include

urlpatterns = [
    url('user/analyzedinfo/get', views.get_analyzed_info, name='get'),
]