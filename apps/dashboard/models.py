from django.db import models
from account.models import PerfilUsuario


class Avaliacao(models.Model):
    choices = (
        ('P', 'Péssimo'),
        ('R', 'Ruim'),
        ('B', 'Bom'),
        ('E', 'Excelente')
    )

    status = models.CharField(
        choices=choices,
        blank=False, null=False,
        max_length=1,
        default='P'
    )

    data = models.DateTimeField()

class Anotacao(models.Model):
    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.DO_NOTHING)
    choices = (
        ('P', 'Positivo'),
        ('N', 'Negativo'),
        
    )

    tipo = models.CharField(
            choices=choices,
            blank=False, null=False,
            max_length=1,
            default='P'
    )
    anotacao = models.TextField()
    

class ContatoAjuda(models.Model):

    usuario = models.ForeignKey(PerfilUsuario, on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField(max_length=100)


class AlertaDeCrise(models.Model):

    choices = (
        ('P', 'Pânico'),
        ('D', 'Depressão'),
        ('A', 'Ansiedade'),
)
    tipo = models.CharField(
        choices=choices, null=True, blank=True,
        max_length=1,
        default='A'
    )

    inicio = models.DateTimeField()
    fim = models.DateField(blank=True, null=True)






