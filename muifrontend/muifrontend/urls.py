"""
URL configuration for muifrontend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.shortcuts import render

def index(request) :
    title = "Home"
    konteks = {
        'title': title,
    }
    return render(request, 'home.html', konteks)

def Galeri(request) :
    title = "Galeri"
    konteks = {
        'title': title,
    }
    return render(request, 'galeri.html', konteks)

def fatwaTausiyah(request) :
    title = "Fatwa & Tausiyah"
    konteks = {
        'title': title,
    }
    return render(request, 'fatwa_tausiyah.html', konteks)

def sejarah(request) :
    title = "sejarah"
    konteks = {
        'title': title,
    }
    return render(request, 'sejarah.html', konteks)

def kosultasi(request) :
    title = "Konsultasi"
    konteks = {
        'title': title,
    }
    return render(request, 'konsultasi.html', konteks)

def berita(request) :
    title = "Berita"
    konteks = {
        'title': title,
    }
    return render(request, 'berita.html', konteks)

def detail(request) :
    title = "Detail Berita"
    konteks = {
        'title': title,
    }
    return render(request, 'detail_berita.html', konteks)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('galeri', Galeri),
    path('fatwa-tausiyah', fatwaTausiyah),
    path('sejarah/', sejarah),
    path('konsultasi', kosultasi),
    path('berita',berita),
    path('detail',detail),
]
