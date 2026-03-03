import json
from pathlib import Path
import CSV_Handler 
import JsonHandler

from Logging.Logging import configureLogger

result = CSV_Handler.readData("students.csv")
print(result)
      
jsonData = JsonHandler.readData("Data.json")
print(jsonData)

configureLogger()




