def listOfEvenOrOdd(isEven,dataSource):
    if isEven :
        return [x for  x in dataSource if x%2==0]
    else :
         return [x for  x in dataSource if x%2!=0]

def listOfEvenOrOddMap(isEven,dataSource):
    if isEven :
        return {x:f"{x}" for  x in dataSource if x%2==0}
    else :
         return {x:f"###{x}" for  x in dataSource if x%2!=0}

def listOfEvenOrOddTuple(isEven,dataSource):
    if isEven :
        return (x for  x in dataSource)
    else :
         return (x for  x in dataSource)
    
list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
print(listOfEvenOrOdd(True,list))
print(listOfEvenOrOdd(False,list))
map1=listOfEvenOrOddMap(True,list)
map2=listOfEvenOrOddMap(False,list)
tuple1=listOfEvenOrOddTuple(True,list)
tuple2=listOfEvenOrOddTuple(False,list)
print(map1)
print(map2)
print(tuple1)
print(tuple1)
