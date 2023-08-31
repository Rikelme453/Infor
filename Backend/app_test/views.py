from django.shortcuts import render
from .models import Produtos
from django.http import JsonResponse

def list(request):
    lists = Produtos.objects.all()
    return render(request, 'base.html', {'lists': lists})

def get_suggestions(request):
    query = request.GET.get('query', '') 
    produtos = Produtos.objects.filter(name__icontains=query)  

    suggestions = [produto.name for produto in produtos]

    return JsonResponse(suggestions, safe=False) 