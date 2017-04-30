# API

The RESTfull API is written in Flask.

## GET /api/water/x/y?area=

x = Latitude  
y = Longitude  
area = zoom level

```
[
  {
    "id": 2,
    "shape": {geojson},
    "baseline": {...},
    "measurements": [
      {
        "pictures": [img1, img2]},
        "ph": {...},
        "timestamp": "..."
      }
    ],
    "results": [
      {
        "quality": "congested",
        "reason": "...",
        "timestamp": "..."
      }
    ]
  }
]
```

## POST /api/input

```
...
```
