from django.contrib import messages
from django.contrib.auth import get_user_model
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
            form_new = form.save(commit=False)
            form_new.is_active = False
            form_new.save()
            return redirect('account:login')
        else:
            data['form'] = form
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
            try:
                user = authenticate(**form.cleaned_data)
                login_django(request, user)
                return redirect('common:index')
            except UserNotActivated:
                data['form'] = form
                messages.error(request, 'Conta não ativa.')

                return render(request, ACCOUNT_LOGIN_TEMPLATE, data)
            except get_user_model().DoesNotExist:
                data['form'] = form
                messages.error(request, 'Dados inválidos')

                return render(request, ACCOUNT_LOGIN_TEMPLATE, data)
        else:
            data['form'] = form

            return render(request, ACCOUNT_LOGIN_TEMPLATE, data)
