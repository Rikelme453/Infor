from django.db import models
from uuid import uuid4


def upload_media(instance , filename):
   return f"(instance.id_produto)-(filename)"".jpg"

class Produto(models.Model):
   id_produto = models.UUIDField(primary_key=True, default=uuid4 , editable = False)
   nome = models.CharField(max_length=255)
   fab =  models.CharField(max_length=255)
   quantidade = models.PositiveIntegerField()
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)

   def __str__(self):
      return self.nome