class Student:
    className="B.Tech Final Year"
    def __init__(self,name,age,rollNo,email,phone):
        self.name=name
        self.age=age
        self.rollNo=rollNo
        self.email=email
        self.phone=phone
    
    def study(self):
        print(f"Name : {self.name}")
    
piyush = Student(name="Piyush",age=22,rollNo=34,email="deepakbajaj79@gmail.com",phone=334445555)

piyush.study()
print(piyush.name)
piyush.name="Changed"
print(piyush.name)
print(piyush.className)


    