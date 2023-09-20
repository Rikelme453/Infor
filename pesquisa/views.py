from django.shortcuts import render
from django.http import HttpResponse

def view_test(request): 
   return HttpResponse('Bom dia?')
