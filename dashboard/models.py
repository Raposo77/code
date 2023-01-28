from django.db import models


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
        max_length=100
    )

class Anotacao(models.Model):
    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.DO_NOTHING)
    choices = (
        ('P', 'Positivo'),
        ('N', 'Negativo'),
    )

    tipo = models.CharField(
            choices=choices,
            blank=False, null=False,
            max_length=255
    )
    anotacao = models.TextField()
    

class PerfilUsuario(models.Model):
    telefone = models.CharField(max_length=11)
    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)


class ContatoAjuda(models.Model):

    usuario = models.ForeignKey(PerfilUsuario, on_delete=models.CASCADE, null=True, blank=True)
    email = models.CharField(max_length=255)


class AlertaDeCrise(models.Model):

    choices = (
        ('P', 'Pânico'),
        ('D', 'Depressão'),
        ('A', 'Ansiedade'),
)
    tipo = models.CharField(
        choices=choices, null=True, blank=True
    )

    inicio = models.DateTimeField()
    fim = models.DateField(blank=True, null=True)


   








