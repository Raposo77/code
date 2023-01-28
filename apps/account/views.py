from django.contrib import messages
from django.contrib.auth import login as login_django
from django.contrib.auth import logout as logout_django
from django.shortcuts import redirect, render
from .decorators import not_login_required
from django.contrib.auth import authenticate
from .forms import AuthForm, RegisterForm


ACCOUNT_REGISTER_TEMPLATE = 'account/register.html'
ACCOUNT_LOGIN_TEMPLATE = 'account/login.html'

@not_login_required()
def register(request):
    data = {'title': 'Registro'}

    if request.method == 'GET':
        form = RegisterForm()
        data['form'] = form
        return render(request, ACCOUNT_REGISTER_TEMPLATE, data)
    elif request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.save()
            messages.success(request, 'Usuário criado com sucesso!')
            return redirect('account:login')
        else:
            data['form'] = form
            messages.error(request, 'Dados inválidos')
            return render(request, ACCOUNT_REGISTER_TEMPLATE, data)

def logout(request):
    logout_django(request)
    return redirect('account:login')


@not_login_required()
def login(request):
    data = {'title': 'acesso'}

    if request.method == 'GET':
        form = AuthForm()
        data['form'] = form

        return render(request, ACCOUNT_LOGIN_TEMPLATE, data)
    elif request.method == 'POST':
        form = AuthForm(request.POST)
        
        if form.is_valid():
            if user := authenticate(**form.cleaned_data):
                login_django(request, user)
                return redirect('dashboard:dashboard')

        data['form'] = form
        messages.error(request, 'Dados inválidos')
        return render(request, ACCOUNT_LOGIN_TEMPLATE, data)
