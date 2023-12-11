import uuid
from django.db import models

class User(models.Model):
    UID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.username
    
class Educator(models.Model):
    EID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    EducatorName = models.CharField(max_length=100)
    InstituteName = models.CharField(max_length=150)

    def __str__(self):
        return self.EducatorName


class Classroom(models.Model):
    CID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    EID = models.ForeignKey('Educator', on_delete=models.CASCADE)
    ClassroomName = models.CharField(max_length=100)

    def __str__(self):
        return self.ClassroomName
    
class Assignment(models.Model):
    AID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    CID = models.ForeignKey('Classroom', on_delete=models.CASCADE)
    Timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Assignment {self.AID} in Classroom {self.CID}"