from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from .forms import AvaliacaoForm, AlertaDeCriseForm, AnotacaoForm, ContatoAjuda
from .models import Avaliacao
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, 'dashboard/index.html')

@login_required(login_url='account:login')
def dashboard(request: HttpRequest) -> HttpResponse:
    avaliacoes = Avaliacao.objects.all()
    form_avaliacao = AvaliacaoForm()
    form_anotacao = AnotacaoForm()

    return render(request, 'dashboard/dashboard.html', context={
        'avaliacoes': avaliacoes,
        'form_avaliacao': form_avaliacao,
        'form_anotacao':  form_anotacao,
        })

def crise(request):
    return render(request, 'dashboard/crise.html')

def ajuda(request):
    return render(request, 'dashboard/ajuda.html')