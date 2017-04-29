from whatar.api.input import Waters, Rating
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

@app.route("/api/whatar/<id:x>/<id:y>", methods=["GET"])
def api_map_coordinates(x, y):
    """Entries on map at coordinates x, y"""

    client, db, collection = connect_db()
    point = collection.find_one({"coordinates": {"x": x, "y": y}})
    return jsonify({"result": point})

@app.route("/input/<id:id>", methods=["POST", "GET"])
def api_input(id):
    """Information about a water"""
    if request.method == "POST":
        try:
            data = json.parse(request.body)
            g.mongo_db.input.insert_one(data).inserted_id
            return jsonify({"Status": "OK"})
        except:
            return jsonify({"Error": "ID not reachable"})
    elif request.method == "GET":
        point = g.mongo_db.input.find_one({"id": id})
        return jsonify({"result": point})
    else:
        return jsonify({"Error": "No method"})


@app.route("/api/quality/<int:id>", methods=["GET"])
def api_one_quality(id):
    """Return one quality"""
    if request.method == "GET":
        point = g.mongo_db.quality.find_one({"id": id})
        # TODO: Calculate value
        quality = "good"
        point[0]["quality"] = quality
        return jsonify({"result": point})
    else:
        return jsonify({"Error": "Wrong method"})


@app.route("/api/quality", methods=["GET"])
def api_several_qualities():
    """Return all qualities"""
    if request.method == "GET":
        point = g.mongo_db.quality.find()
        return jsonify({"result": point})
    else:
        return jsonify({"Error": "Wrong method"})

if __name__ == "__main__":
    app.run(debug=True)
