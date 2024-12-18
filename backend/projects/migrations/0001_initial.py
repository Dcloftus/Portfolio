# Generated by Django 4.2.16 on 2024-11-07 16:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='TextSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section_type', models.CharField(choices=[('main_description', 'Main Description'), ('image_description', 'Image Description'), ('extra_detail', 'Extra Detail')], max_length=20)),
                ('text', models.TextField()),
                ('order', models.PositiveIntegerField(editable=False)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='text_sections', to='projects.project')),
            ],
        ),
    ]
