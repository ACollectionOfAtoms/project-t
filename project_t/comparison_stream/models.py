from __future__ import unicode_literals

from django.db import models


class TEvent(models.Model):
    event_description = models.CharField(max_length=100)
    references = models.CharField(max_length=10000)
    date = models.DateTimeField('date published')
