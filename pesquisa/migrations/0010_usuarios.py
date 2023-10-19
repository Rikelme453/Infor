# Generated by Django 4.2.4 on 2023-10-04 13:40

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('pesquisa', '0009_produto_valor_alter_produto_fab'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id_user', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nomeUser', models.CharField(max_length=255)),
                ('emailUser', models.CharField(max_length=255)),
                ('senhaUser', models.CharField(max_length=255)),
                ('idadeUser', models.IntegerField()),
            ],
        ),
    ]
