from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'ordering': ['order', 'id']},
        ),
        migrations.AddField(
            model_name='project',
            name='order',
            field=models.PositiveIntegerField(default=0, help_text='Lower numbers show first on the projects page'),
        ),
    ]
