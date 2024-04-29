from django.contrib import admin
from .models import Message


# Register your models here.
class MessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "message")
    # exclude = ["date_created"]


admin.site.register(Message, MessageAdmin)
