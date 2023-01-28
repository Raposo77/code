from django.forms import ModelForm
from .models import Avaliacao, ContatoAjuda, Anotacao, AlertaDeCrise
from django import forms 


class AvaliacaoForm(ModelForm):
    class Meta:
        model = Avaliacao
        exclude = ('user',)

        widgets = {
            'data': forms.DateInput(
                attrs={'type': 'date'}, format='%Y-%m-%d'
            ),
        }

        
class ContatoAjudaForm(ModelForm):
    class Meta:
        model = ContatoAjuda
        fields = '__all__'


class AnotacaoForm(ModelForm):
    class Meta:
        model = Anotacao
        exclude = ('avaliacao', )


class AlertaDeCriseForm(ModelForm):
    class Meta:
        model = AlertaDeCrise
        fields = '__all__'

