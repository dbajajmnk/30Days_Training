def greet(name):
    print(f"Hello {name}")

### postion Argument 
def studentInfo(name,age,rollNo,college):
    print(f"Name {name}\n Age {age} \n Roll No {rollNo} \n College {college}")
### Key argument
## multiple returns
## variditic 
## keywargs 


greet("Ansari")
studentInfo("Ansari",20,10,"Testing")
studentInfo(name="Ansari",age=20,rollNo=10,college="Testing")


def multipleReturn():
    return 1,2,4,5,6

print(f"Muliple Return : {multipleReturn()}")

def calcuateTotal(*args):
    return sum(args)

def printObjectInfo(**keyargs):
    for key,value in keyargs.items():
        print(f"{key},{value}")


printObjectInfo(name="Deepak",age=10)
calcuateTotal(10,20,30,40,45,50)


