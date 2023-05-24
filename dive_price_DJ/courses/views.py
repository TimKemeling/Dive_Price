from django.shortcuts import render, get_object_or_404
from django.db.models import Avg
from django.views.generic import FormView, ListView
from .forms import SearchForm, BookingForm
from .models import prices


def courses (request):
    if request.method == "GET":
        form = SearchForm(request.GET)
        if form.is_valid():
            q = form.cleaned_data['q']
            
            locationsearch= prices.objects.filter(location__iexact = q)
            coursesearch= prices.objects.filter(name__icontains = q)
            schoolsearch= prices.objects.filter(school__icontains = q)
            
            if len(locationsearch) > 0:
                max = locationsearch.order_by('-price')[0]
                min = locationsearch.order_by('price')[0]
                ow = prices.objects.filter(name = "Open Water Diver")
                average = ow.aggregate(average_price = Avg('price'))
                context = {
                'courselist' : locationsearch,
                'max' : max,
                'min' : min,
                'average' : (average['average_price'])}
                return render(request, 'courses/courses.html', context)
            
            elif len(coursesearch) > 0:

                context = {
                    'courselist' : coursesearch,
                    'q' : q,
                }
                return render(request, 'courses/coursesearch.html', context)
            

            elif len(schoolsearch) > 0:
                max = schoolsearch.order_by('-price')[0]
                min = schoolsearch.order_by('price')[0]


                owfilter = schoolsearch.filter(name__icontains = "Open Water")
                if owfilter:
                    ow = owfilter[0]
                else: ow = None


                advancedfilter = schoolsearch.filter(name__icontains = "Advanced")
                if advancedfilter:
                    advanced = advancedfilter[0]
                else: advanced = None


                fdfilter = schoolsearch.filter(name__icontains = "fun")
                if fdfilter:
                    fd = fdfilter[0]
                else: fd = None

                context = {
                    'courselist' : schoolsearch,
                    'max' : max,
                    'min' : min,
                    'ow' : ow,
                    'advanced' : advanced,
                    'fd' : fd
                }
                return render(request, 'courses/schoolsearch.html', context)

            else:
                return render(request, 'courses/nosearch.html', {'q':q})

            

class Bookingview(FormView):
    template_name = 'courses/booking.html'
    form_class = BookingForm
    # from django.core.mail import send_mail

    # send_mail(
    #     'subject',
    #     "search just fired",#message,
    #     "tmkcrypto@gmail.com",#from,
    #     ["timkemeling@gmail.com"],#to,
    #     fail_silently=False,)

def nosearch(request):
    return render(request, 'courses/nosearch.html')


class SearchView(FormView):
    template_name = 'courses/search.html'
    form_class = SearchForm
    success_url = 'courses/courses.html'


class all_courses(ListView):   
    template_name = 'courses/all_courses.html' 
    context_object_name = "courselist"

    def get_queryset(self):
        return prices.objects.all

def course(request, course_id, **kwargs):
    course = get_object_or_404(prices, pk=course_id)
    return render(request, 'courses/course.html', {"course" : course})

def homeview(request):
    return render(request, 'courses/home.html')