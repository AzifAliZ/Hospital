# views.py
from rest_framework import viewsets
from .models import Patient
from .serializer import PatientSerializer  # ✅ make sure this matches your serializer file

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer