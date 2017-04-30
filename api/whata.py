# from whatar.api.input import Waters, Rating
from flask import Flask, jsonify, request
from pymongo import MongoClient
import configparser
import os
import json

config = configparser.ConfigParser()
config.read(os.getcwd() + '/config.ini')

app = Flask(__name__)
app.secret_key = config['flask']['secret']


def get_db():
    """
    Opens the mongodb connection and holds it
    """
    if not hasattr(g, 'mongo_db'):
        g.mongo_db = MongoClient(config['mongo']['host'], config['mongo']['port'])

    return g.mongo_db


def coordinates_area(x, y, area):
    """Get all coordinates in one zoom level"""
    # TODO: Write function
    return [{"x": x, "y": y}]


@app.route("/api/water/<int:x>/<int:y>", methods=["GET"])
def api_water(x, y):
    """Get information for coordinate x, y for zoom level area"""

    if request.method == "GET":
        # client, db, collection = connect_db()
        area = request.form["area"]  # zoom level
        coordinates = coordinates_area(x, y, area)
        results = []

        for coordinate in coordinates:
            # point = collection.find_one({"coordinates": {"x": x, "y": y}})
            values = g.mongo_db.find_one({"coordinates": {"x": coordinate["x"], "y": coordinate["y"]}})
            results.append(values)
    else:
        return jsonify({"Error": "Wrong method"})
    return jsonify(results)


@app.route("/input/<int:id>", methods=["POST"])
def api_input(id):
    """Provider sends information to this endpoint"""
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            status = g.mongo_db.input.insert_one(data).inserted_id
            return jsonify({"Status": "OK"})
        except:
            return jsonify({"Error": "ID not reachable"})
    else:
        return jsonify({"Error": "No method"})


if __name__ == "__main__":
    app.run(debug=True)
