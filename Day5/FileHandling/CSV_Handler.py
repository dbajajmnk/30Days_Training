import csv

def readData(path,contentEncoding="utf-8"):
    with open(path,newline="",encoding=contentEncoding) as f:
      result = list(csv.DictReader(f))
      return result