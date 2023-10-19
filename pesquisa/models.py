from django.db import models
from uuid import uuid4


def upload_media(instance , filename):
   return f"(instance.id_produto)-(filename)"".jpg"

class Produto(models.Model):
   id_produto = models.UUIDField(primary_key=True, default=uuid4 , editable = False)
   nome = models.CharField(max_length=255)
   fab =  models.CharField(max_length=254)
   quantidade = models.PositiveIntegerField()
   valor = models.PositiveIntegerField(null = True, default = None)
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)


   def __str__(self):
      return self.nome

class Usuario(models.Model): 
      id_user = models.UUIDField(primary_key=True, default=uuid4 , editable = False , )
      nomeUser = models.TextField(max_length=255)
      emailUser = models.EmailField(max_length=255)
      senhaUser = models.CharField(max_length=255)
      idadeUser = models.IntegerField()

      def __str__(self):
         return self.nomeUser
      
      