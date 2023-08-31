from rest_framework import viewsets
from  pesquisa.api import serializers
from pesquisa import models
from ..models import Produto

class ProdutosViewSets(viewsets.ModelViewSet):
    serializer_class =  serializers.ProdutosSerializers
    queryset = models.Produto.objects.all()

def get_queryset(self): 
    query = Produto.objects.all()
    nome = self.request.query_params.get('nome')
    if nome is not None: 
        query = query.filter(nome_icontains = nome)
    return query
    