import threading
from contextlib import contextmanager


@contextmanager
def FileHandling():
    file = open("sample.txt","r",encoding="utf-8") 
    try:
        yield file
    except:
        raise
    finally:
        file.close()
        print("File Closed")
    

def main():
    with FileHandling() as f:
        for line in f.readlines():
            print(line)

if __name__ == "__main__":
    main()


