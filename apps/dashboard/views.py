from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from .forms import AvaliacaoForm,AlertaDeCriseForm , AnotacaoForm, ContatoAjuda


def dashboard(request: HttpRequest) -> HttpResponse:
    form_avaliacao = AvaliacaoForm()
    form_alerta_crise = AlertaDeCriseForm()
    form_anotacao = AnotacaoForm()
    form_contato_ajuda = ContatoAjuda()
    
    return render(request, 'dashboard/dashboard.html', context={

        'form': form_alerta_crise,
     
        })




