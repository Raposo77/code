from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpRequest, HttpResponse
from .forms import AvaliacaoForm, AlertaDeCriseForm, AnotacaoForm, ContatoAjuda
from .models import Avaliacao
from django.contrib.auth.decorators import login_required
from django.contrib import messages

DASHBOARD_URL = 'dashboard:dashboard'

def index(request: HttpRequest) -> HttpResponse:
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

def cadastro_avaliacao(request: HttpRequest) -> HttpResponse:
    if request.method != 'POST':
        return redirect(DASHBOARD_URL)

    form = AvaliacaoForm(request.POST)
    if form.is_valid():
        form.save(commit=False)
        form.instance.user = request.user
        form.save()
        messages.success(request, 'Avaliacao salva com sucesso!')
        return redirect(DASHBOARD_URL)

    messages.error(request, 'Verifique os dados digitados.')
    return redirect(DASHBOARD_URL)


def cadastro_alerta_de_crise(request: HttpRequest) -> HttpResponse:
    if request.method != 'POST':
        return redirect(DASHBOARD_URL)
    
    form = AlertaDeCriseForm(request.POST)
    if form.is_valid():
        pass
    messages.error(request, 'Verifique os dados digitados.')
    return redirect(DASHBOARD_URL)
 

def cadastro_contato_ajuda(request: HttpRequest) -> HttpResponse:
    form = ContatoAjuda(request.POST)
    if form.is_valid():
        form.save()
        pass
    messages.error(request, 'Verifique os dados digitados.')
    return redirect(DASHBOARD_URL)
 

def crise(request):
    return render(request, 'dashboard/crise.html')

def ajuda(request):
    return render(request, 'dashboard/ajuda.html')

