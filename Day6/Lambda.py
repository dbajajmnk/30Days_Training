number = int(input("Enter a Number"))
numbe2 = int(input("Enter a Number"))
# squareRoot = lambda  a : a*a

squareRoot = lambda  a,b : a*b 

numbers = [1,2,3,4,5,6,7]
double = list(map(lambda a:a*2,numbers))
print(double)

print(squareRoot(number,numbe2))