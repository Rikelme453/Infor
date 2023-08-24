from django.db import models

class Produto(models.Model):
   nome = models.CharField(max_length=50)
   fab =  models.CharField(max_length=50)
   quantidade =  models.IntegerField()

   def __str__(self):
      return self.nome

class Pessoa(models.Model):
   nome = models.CharField(max_length=50)
   idade =  models.IntegerField()
  
   def __str__(self):
      return self.nome
