# Generated by Django 4.1.5 on 2023-01-28 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PerfilUsuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('telefone', models.CharField(max_length=11)),
                ('nome', models.CharField(max_length=255)),
                ('sobrenome', models.CharField(max_length=255)),
                ('endereco', models.CharField(max_length=255)),
            ],
        ),
    ]
