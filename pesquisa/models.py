from django.db import models

class Produto(models.Model):
   nome = models.CharField(max_length=255)
   fab =  models.CharField(max_length=255)
   quantidade = models.IntegerField()

   def __str__(self):
      return self.nome