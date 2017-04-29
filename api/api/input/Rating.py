from enum import Enum
from datetime import datetime
from . import Waters

class Quality(Enum):
    GOOD = 1
    ALRIGHT = 2
    BAD = 3

class Rating():
    """
    A rating that is contributed by a provider
    """

    water = Waters
    time = datetime
    ph = None
    picture = '' #
    quality = Quality # Manual user rating
    temperature = None
    turbidity = None
    conductivity = None
