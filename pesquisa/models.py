from django.db import models


def upload_media(instance , filename):
   return r"(instance.id)-(filename)"".jpg"

class Produto(models.Model):
   nome = models.CharField(max_length=255)
   fab =  models.CharField(max_length=255)
   quantidade = models.PositiveIntegerField()
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)

   def __str__(self):
      return self.nome