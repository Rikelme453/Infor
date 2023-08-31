from rest_framework import serializers
from pesquisa import models

class ProdutosSerializers(serializers.ModelSerializer):
    class Meta:
       model = models.Produto
       fields = '__all__'