#############################Context Manager#########################
##custom context manager 
##and use inbuild one 
from contextlib import contextmanager


@contextmanager
def mycustomContextManager():
    print(f"Hello from Studnets")
    yield 
    print("I am good there")

@contextmanager
def fileReader(path):
    file = open(path,"r",encoding="utf-8")
    try:
        yield file
    except:
        raise 
    finally:
        file.close()
        print("File Closed")


    



def main():
    with mycustomContextManager():
        print("I am in main")
    
    with fileReader("sample.txt") as f:
        for line in f.readlines():
             print(line)


if __name__ =="__main__":
    main()