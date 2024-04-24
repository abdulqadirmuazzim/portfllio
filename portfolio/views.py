from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from .models import Message

# Create your views here.
# for handling requests and responses


def home(req):
    obj = Message.objects.all()
    if req.method == "POST":
        # an instance of the measage class
        mclass = Message()
        # get the value of the input fields from the form
        name = req.POST.get("name")
        email = req.POST.get("email")
        message = req.POST.get("message")
        # assign the values from the form to the database class
        mclass.name = name
        mclass.email = email
        mclass.message = message
        # save to the database
        mclass.save()
        with open("comments.txt", "a") as file:
            file.write(f"{name}: {message}\n")
            messages.success(req, "Thanks for your comment")
        return render(req, "home.html", {"others": f"{name} has just commented"})

    return render(req, "home.html", {"item": obj})
