from django import forms
from .models import Question


class NewTestForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ('question', 'option_a', 'option_b',
                  'option_c', 'option_d', 'answer')
