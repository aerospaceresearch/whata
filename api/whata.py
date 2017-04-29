from flask import Flask
from whatar.api.input import Waters, Rating
from flask import jsonify, request
import pymongo
from pymongo import MongoClient
import config

app = Flask(__name__)
app.secret_key = config.flask_secret_key

def connect_db():
    client = MongoClient(config.mongo_db_host, 27017)
    db = client.test_database
    collection = db.collection
    return client, db, collection

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
            data = json.parse(req.bodyſ)
            client, db, collection = connect_db()
            collection.insert_one(data).inserted_id
            return jsonify({"Status": "OK"})
        except:
            return jsonify({"Error": "ID not reachable"})
    elif request.method == "GET":
        client, db, collection = connect_db()
        point = collection.find_one({"id": id})
        return jsonify({"result": point})
    else:
        return jsonify({"Error": "No method"})


@app.route("/api/quality/<int:id>", methods=["GET"])
def api_one_quality(id):
    """Return one quality"""
    if request.method == "GET":
        client, db, collection = connect_db()
        point = collection.find_one({"id": id})

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
        client, db, collection = connect_db()
        point = collection.find()
        return jsonify({"result": point})
    else:
        return jsonify({"Error": "Wrong method"})

if __name__ == "__main__":
    app.run(debug=True)
