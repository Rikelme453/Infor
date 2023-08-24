from rest_framework import viewsets
from  produtos.api import serializers
from produtos import models

class ProdutosViewSets(viewsets.ModelViewSet):
    serializer_class =  serializers.ProdutosSerializers
    queryset = models.Produto.objects.all()