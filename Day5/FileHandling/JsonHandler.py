import json
from pathlib import Path
def readData(path,contentEncoding="utf-8"):
    result = json.loads(Path(path).read_text(encoding=contentEncoding))  
    return result