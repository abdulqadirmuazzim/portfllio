# Generated by Django 5.0.1 on 2024-04-23 20:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0002_messages_date_created_alter_messages_email_and_more"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Messages",
            new_name="Message",
        ),
    ]