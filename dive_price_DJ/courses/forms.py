from django import forms
from datetime import datetime, timedelta


class SearchForm(forms.Form):
    q = forms.CharField(label='', max_length=100)



class BookingForm(forms.Form):
    year = datetime.today().year
    month = datetime.today().month
    day = datetime.today().day

    try:
        # try returning same date ten years ago
        ten_year_date = datetime.strptime(f"{year -10}-{month}-{day}",'%Y-%m-%d').date()
    except ValueError: 
        # incase of error due to leap year, return date - 1
        ten_year_date = datetime.strptime(f"{year -10}-{month}-{day-1}",'%Y-%m-%d').date()


    first_name = forms.CharField(label='First name', max_length=25)
    last_name = forms.CharField(label='Last name', max_length=40)
    dob = forms.DateField(input_formats='%Y-%m-%d', label='Date of Birth', initial = ten_year_date, widget=forms.SelectDateWidget(years = range(1920, year - 9)))
    dive_date = forms.DateField(input_formats='%Y-%m-%d', label='When do you want to dive?', widget=forms.SelectDateWidget(years=range(year, year+1)))
    comments = forms.CharField(widget=forms.Textarea, label='comments/requests')
    email = forms.CharField(widget=forms.EmailInput, label='Your Email')



    