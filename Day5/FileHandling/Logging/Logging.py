import logging
from pathlib import Path
from logging.handlers import RotatingFileHandler


def configureLogger():
    LOG_DIR = Path("day_5_logs")
    LOG_FILE = LOG_DIR/"app.log"

    LOG_DIR.mkdir(exist_ok=True)
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)


    consoleHandler = logging.StreamHandler()
    logger.setLevel(logging.INFO)

    fileHandler = RotatingFileHandler(LOG_FILE,maxBytes=200_00,backupCount=3,encoding="utf-8")
    logger.setLevel(logging.INFO)

    fmt = logging.Formatter(
        fmt="%(asctime)s | %(name)s | %(levelname)s %(message)s $"
    )
    consoleHandler.setFormatter(fmt)
    fileHandler.setFormatter(fmt)

    if not logger.handlers:
        logger.addHandler(consoleHandler)
        logger.addHandler(fileHandler)
    else:
        logger.handlers= [consoleHandler,fileHandler]
    
    logger.info("Hey Guys, Lets Test this")
    logger.warning("Hey Guys, Lets Test this")
    logger.error("Hey Guys, Lets Test this")
    logger.debug("Hey Guys, Lets Test this")


configureLogger()



