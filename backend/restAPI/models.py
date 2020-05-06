from django.db import models

# Create your models here.

# Contact form model
class Contact(models.Model):
    name = models.CharField(max_length = 50, default= ' ')
    number = models.CharField(max_length=15, default = ' ')

    def __str__(self):
        return self.name
