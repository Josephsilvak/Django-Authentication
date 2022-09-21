import email
import http
from http.client import HTTPResponse
from pickletools import read_uint1
from django.http import HttpResponse
from django.shortcuts import render, redirect

from django.contrib import messages

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import  logout as logout_django
from django.contrib.auth.decorators import login_required

"""
OBS: em caso de conflito do import com o nome da def... podemos importar com outro nome usando "as"
ex: from django.contrib.auth import login as login_qualquercoisa
"""

def cadastrar(request):
    if request.method == "GET":
        return render(request, 'home/login.html', context={'atualCad':True})
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user = User.objects.filter(username = username).first()

        if user:
            return HttpResponse('Já existe um usuário com esse nome!')
        else:
            user = User.objects.create_user(username = username,   email = email,   password = senha)
            user.save()
                
            return HttpResponse('Usuário cadastrado com sucesso!')


def entrar(request):
    if request.method == "GET":
        return render(request, 'home/login.html')
    else:
        userLog = request.POST.get('userLog')
        senhaLog = request.POST.get('senhaLog')

        print(userLog, senhaLog)
        user = authenticate(username = userLog,   password = senhaLog)

        if user:
            login(request, user)

            return render(request, 'home/index.html', context={'atualIndex':True})
        else:
            messages.error(request, 'Usuário ou senha inválidos.')
            return render(request, 'home/login.html', context={'atualCad':True})



def plataforma(request):
    return render(request, 'home/index.html', context={'atualIndex':True})


@login_required(login_url="conta/")
def conta(request):
    return render(request, 'home/conta.html', context={'atualConta':True})


def logout(request):
    logout_django(request)
    return redirect('home:cadastrar')