# Generated by Django 5.0.4 on 2024-05-01 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_grade'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='student_grade',
            field=models.IntegerField(blank=True, editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='grade',
            name='student_answer',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
