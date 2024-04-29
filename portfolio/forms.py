from django import forms
from .models import Message


class Myform(forms.ModelForm):
    class Meta:
        model = Message
        fields = ["name", "email", "message"]
