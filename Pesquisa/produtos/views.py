from django.shortcuts import render
from .models import Pessoa


def home(request):
    users = Pessoa.objects.all()
    return render(request, 'index.html', {'pessoas':  users})




