from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from .models import Message
from .forms import Myform

# Create your views here.
# for handling requests and responses


def home(req):
    obj = Message.objects.all()
    if req.method == "POST":
        # an instance of the measage class
        form = Myform(req.POST)
        # get the value of the input fields from the form
        if form.is_valid():
            name = req.POST.get("name")
            # email = req.POST.get("email")
            message = req.POST.get("message")
            with open("comments.txt", "a") as file:
                file.write(f"{name}: {message}\n")
                messages.success(req, "Thanks for your comment")

            # save to the database
            form.save()
            return render(req, "home.html", {"others": f"{name} has just commented"})

    return render(req, "home.html", {"item": obj})
