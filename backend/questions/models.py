from django.db import models

# Create your models here.

class Questions(models.Model):
    question = models.TextField()

    answer = models.TextField()

    category = models.CharField(
        max_length=100,
        default="JacaScript"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question