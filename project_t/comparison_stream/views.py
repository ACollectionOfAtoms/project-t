from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'comparison_stream/index.html'
