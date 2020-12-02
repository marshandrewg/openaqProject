import flask
from flask import request, jsonify

app = flask.Flask(__name__)

measurements = [
    {
        "city": "El Paso",
        "coordinates": {"latitude": 31.7656, "longitude": -106.455},
        "country": "US",
        "date": 
            {"utc": "2020-12-01T15:00:00Z", "local": "2020-12-01T08:00:00-07:00"},
        "location": "Chamizal C41",
        "parameter": "o3",
        "unit": "ppm",
        "value": 0.01
    }
]

@app.route('/api/v1/measurements', method=['POST'])
def add_measurement():
    if not request.json or not 'city' in request.json:
        abort(400)
    measurement = {
        "city": request.json['city'],
        "coordinates": request.json['coordinates'],
        "country": request.json['country'],
        "date": request.json['date'],
        "location": request.json['location'],
        "parameter": request.json['parameter'],
        "unit": request.json['unit'],
        "value": request.json['value']
    }
    measurements.append(measurement)
    return jsonify(measurement), 201
