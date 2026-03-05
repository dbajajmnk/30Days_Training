from PracticeInheritance import Student
import csv
piyush = Student("Piyush","105",10,"dk@gmail.com")
print(piyush.address)
piyush.win()

with open("test.csv","r",encoding="utf-8") as f:
     content = list(csv.DictReader(f))
     print(content)