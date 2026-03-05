##create dector for your name and your friend name and use that
import functools

def myNameA(fn):
    functools.wraps(fn)
    def wrapper(*args,**kwargs):
        print("I am from my name")
    return wrapper

@myNameA
def addTwoNumber(a,b)->int:
    return a+b


def addInputFromUser():
    a = int(input("Enter a number"))
    b = int(input("Enater Second Number"))
    return a,b

a,b = addInputFromUser()
sum = addTwoNumber(a,b)
print(sum)


