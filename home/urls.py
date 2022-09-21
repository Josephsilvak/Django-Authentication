from operator import index
from unicodedata import name
from django.urls import path
from . import views

app_name = 'home' 
urlpatterns = [
    path('cadastro/', views.cadastrar, name='cadastrar'),
    path('login/', views.entrar, name='entrar'),
    path('', views.plataforma, name="index"),
    path('conta/', views.conta, name="conta"),
    path('logout/', views.logout, name="logout")
]
