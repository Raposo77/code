from django.forms import ModelForm
from .models import Avaliacao, ContatoAjuda, Anotacao, AlertaDeCrise


class AvaliacaoForm(ModelForm):
    class Meta:
        model = Avaliacao
        fields = '__all__'


class ContatoAjudaForm(ModelForm):
    class Meta:
        model = ContatoAjuda
        fields = '__all__'


class AnotacaoForm(ModelForm):
    class Meta:
        model = Anotacao
        fields = '__all__'


class AlertaDeCriseForm(ModelForm):
    class Meta:
        model = AlertaDeCrise
        fields = '__all__'

