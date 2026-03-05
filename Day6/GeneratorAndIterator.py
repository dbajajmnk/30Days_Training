def myGenerator(n):
    for i in range(1,n+1):
        yield i*i


g = myGenerator(4)
for j in g:
    print(j)

g = myGenerator(4)
for k in g:
    print(k)