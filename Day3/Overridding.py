class Parent:
    def __init__(self,name,middleName,lastName):
        self.name=name
        self.middleName = middleName
        self.lastName = lastName
    
    def bussiness(self,turnover):
        print("Parent Implemenation",turnover)
    
    def marry(self):
        print("Marry with Luxmi")


class ChildDeepak(Parent):
      def __init__(self, name, middleName, lastName,education):
          super().__init__(name, middleName, lastName)
          self.education=education
     
      def bussiness(self, turnover):
           print("Deepak Child Implementation",turnover)

      def marry(self):
           print("Marry with Pinki")



class ChildRam(Parent):
      def __init__(self, name, middleName, lastName,hobbies):
          super().__init__(name, middleName, lastName)
          self.hobbies=hobbies
     
      def bussiness(self, turnover):
           print("Deepak Child Implementation",turnover)

      def marry(self):
           print("Marry with Chinky")

class DuckTypeContext:
      def __init__(self,language,flexible):
          self.language=language
          self.flexible=flexible
     
      def bussiness(self, turnover):
           print("Deepak Child Implementation",turnover)

      def marry(self):
           print("I am from Duck Typing")


def checkMarryStatus(parent):
     parent.marry()


deepak = ChildDeepak("Deepak","Kumar","Bajaj","MSC")
ram = ChildRam("Ram","Kumar","Bajaj","Cricket")
duckTyping = DuckTypeContext("Punjabi",True)

checkMarryStatus(deepak)
checkMarryStatus(ram)
checkMarryStatus(duckTyping)

