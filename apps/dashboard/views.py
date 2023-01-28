from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpRequest, HttpResponse
from .forms import AvaliacaoForm, AlertaDeCriseForm, AnotacaoForm, ContatoAjuda
from django.contrib.auth.decorators import login_required
from django.contrib import messages


def index(request: HttpRequest) -> HttpResponse:
    return render(request, 'dashboard/index.html')

@login_required(login_url='account:login')
def dashboard(request: HttpRequest) -> HttpResponse:
    form_avaliacao = AvaliacaoForm()
    form_anotacao = AnotacaoForm()
    
    return render(request, 'dashboard/dashboard.html', context={
        'form_avaliacao': form_avaliacao,
        'form_anotacao':  form_anotacao,

        })


def cadastro_avaliacao(request: HttpRequest) -> HttpResponse:
    if request.method != 'POST':
        return redirect(reverse('dashboard:dashboard'))
  
    form = AvaliacaoForm(request.POST)
    if form.is_valid():
        form.save()
        return HttpResponse('dddd')





        
    messages.error(request, 'Verifique os dados digitados.')
    return redirect(reverse('dashboard:dashboard'))
 

def view_cadastro_alerta_de_crise(request: HttpRequest) -> HttpResponse:
    if request.method != 'POST':
        return redirect(reverse('dashboard:dashboard'))
    
    form = AlertaDeCriseForm(request.POST)
    if form.is_valid():
        pass
    messages.error(request, 'Verifique os dados digitados.')
    return redirect(reverse('dashboard:dashboard'))
 

def view_contato_ajuda(request: HttpRequest) -> HttpResponse:
    form = ContatoAjuda(request.POST)
    if form.is_valid():
        form
        pass
    messages.error(request, 'Verifique os dados digitados.')
    return redirect(reverse('dashboard:dashboard'))
 






