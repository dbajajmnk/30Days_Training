'''
create new list for even number and odd numbers only
Create inline lambda
Create lambda and use it
#######################Decorator#######################
create dector for your name and your friend name and use that

###########################Generator & Iterator######################
for List,Tuple 

#############################Context Manager#########################
custom context manager 
and use inbuild one 
'''

numbers= [1,2,3,4,5,6,7,8,9,10]

oddLambda = lambda x:x%2!=0
odd = list(filter(oddLambda,numbers))

print(odd)