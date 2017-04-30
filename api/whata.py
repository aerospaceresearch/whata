# from whatar.api.input import Waters, Rating
from flask import Flask, jsonify, request
# from pymongo import MongoClient
import configparser
import os
import json
from flask_pymongo import PyMongo

config = configparser.ConfigParser()
config.read(os.getcwd() + '/config.ini')

app = Flask(__name__)
app.secret_key = config['flask']['secret']

app.config['MONGO_HOST'] = config['mongo']['host']
app.config['MONGO_PORT'] = config['mongo']['port']
app.config['MONGO_DBNAME'] = config['mongo']['db']
mongo = PyMongo(app, config_prefix='MONGO')


def coordinates_area(x, y, area):
    """Get all coordinates in one zoom level"""
    # TODO: Write function
    return [{"x": x, "y": y}]


@app.route("/api/water/<int:x>/<int:y>", methods=["POST", "GET"])
def api_water(x, y):
    """Get information for coordinate x, y and zoom level area"""
    try:
        area = request.form["area"]  # zoom level
    except:
        area = 100

    coordinates = coordinates_area(x, y, area)
    results = []

    for coordinate in coordinates:
        values = mongo.db.whata.find({"coordinates": {"x": coordinate["x"], "y": coordinate["y"]}})
        results.append(values)

    return jsonify(results)


@app.route("/input/<int:id>", methods=["POST"])
def api_input(id):
    """Provider sends information to this endpoint"""
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            status = mongo.db.whata.insert_one(data).inserted_id
            return jsonify({"Status": "OK"})
        except:
            return jsonify({"Error": "ID not reachable"})
    else:
        return jsonify({"Error": "No method"})


if __name__ == "__main__":
    app.run(debug=True)
