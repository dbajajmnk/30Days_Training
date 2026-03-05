class Person:
    def __init__(self,name,address):
        self.name=name
        self.address=address

    def win(self):
        print("You need to win fame in good things")

class Student(Person):
    def __init__(self,name,address,rollNo,email):
        super().__init__(name=name,address=address)
        self.rollNo=rollNo
        self.email=email

    def win(self):
        print("I will get my with AI")

    





