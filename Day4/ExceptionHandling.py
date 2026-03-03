def conversion(input):
    return int(input)


try :
    result=conversion("ppp")
except ValueError as e:
    print("Something went wrong while Conversion")

else: 
    print(result)

