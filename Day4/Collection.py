### List
### Tuple
### Set
### Diectory

class Hello:
    def __init__(self):
        pass

list = ["A","B",True]
print(list)
tuple = ("A","B",Hello())

print(f"Tuple {tuple[1]}")

mySet = set(list)
isALabel = "A" in mySet


print(f"isALabel {isALabel}")

students = {"Ansari":"Btech","Arun":"MCA"}

for item in students:
    print(item)

for key in students.keys():
    print(key)

for key in students.values():
    print(key)