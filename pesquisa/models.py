from django.db import models

def upload_media(instance , filename):
   return r"(instance.id)-(filename)"".jpg"

class Client(models.Model):
   user = models.OneToOneField()
   name = models.CharField(max_length=250)
   address = models.CharField(max_length=250,null=True,blank=True)

   def __str__(self):
      return self.name

class Category(models.Model):
   title = models.CharField(max_length=250)
   slug = models.SlugField(unique=True)

   def __str__(self):
      return self.title

class Produto(models.Model):
   nome = models.CharField(max_length=255)
   slug = models.SlugField(unique=True)
   fab =  models.CharField(max_length=255)
   market_prize = models.PositiveIntegerField()
   sell_prize = models.PositiveIntegerField()
   quantidade = models.PositiveIntegerField()
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)
   description = models.TextField()
   views = models.PositiveIntegerField(default=0)
   warranty = models.CharField(max_length=300, null=True,blank=True)
   category = models.ForeignKey(Category, on_delete= models.CASCADE)

   def __str__(self):
      return self.nome