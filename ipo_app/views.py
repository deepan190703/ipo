from django.shortcuts import render
from django.http import HttpResponse

def dashboard_view(request):
    return render(request, 'dashboard.html')

def login_view(request):
    return render(request, 'login.html')
