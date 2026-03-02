print("Hello World")

if 9>10:
    print("9 is Greater")
else:
    print("10 is Greater")

for i in range(10):
    print(i)


##### Variables and Types ###
a=10
b=10

print(a)
print(b)

## Python Data Types
'''
Boolean True, False
Integer 10
Float
String

'''
a="Deepak"
b="Anuj"

print(a)
print(b)

a=True
b=False

print(a)
print(b)

a=10.5
b=14.5

print(a)
print(b)

PI = 3.45
print(PI)
PI="D"
print(PI)

print(type(10))
print(isinstance(10,int))
print(isinstance(True,bool))

print(isinstance(10,int))
print(isinstance(True,int))

x = int(input("Enter a Number 1"))
y = int(input ("Enter a  Second Number 2"))

z = x+y

print(z)

#### Immutability and Mutability #####

names = (1,2,3,4)
print(names)
names = ["A","B","C","D"]
print(names)
names.append(True)
print(names)

###### Cosntrol Structures ######


### Looping ###
for i in range(10):
    print(i)

a =1 
while(a<10):
    print(a)
    a+=1

### Conditional ###
'''
if 
if else
if elif

'''
### Switch ###
if x>y :
    print("X is Grater",x)
else:
    print("Y is Greater")

if x>y :
    if x>z:
        print("X is Grater",x)
    else:
        print("Z is Greater",z)
else:
     if y>z:
        print("X is Grater",y)
     else:
        print("Z is Greater",z)
   

marks = 90

if marks>90:
    print("Excellent")
elif marks>80:
    print("First Devision")
else:
    print("Sorry!","Need to Attempt Again")


monthNumber = 1
match monthNumber:
    case 1: 
        print("Janunary")
    case 2:
        print("February")
    case 3:
         print("March")


### Jumping ###






