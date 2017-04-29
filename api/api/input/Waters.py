import geojson
from enum import Enum

class Flow(Enum):
    STANDING = 1
    FLOATING = 2
    MARITIME = 3

class Type(Enum):
    SWEET = 1
    SALTY = 2

class Waters():
    """
    Quantifies waters
    """

    def __init__(self):
        self.type = Flow(Flow.STANDING) # By default add floating waters
        self.type = Type(Type.SWEET) # Usually we want to track sweet waters

    coordinate = geojson.Point() # We can find all points of an area and quantify them as one water
    name = ''
    flow = Flow
    type = Type
