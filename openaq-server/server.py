import flask
from flask import request, jsonify
from flask_cors import CORS
app = flask.Flask(__name__)
cors = CORS(app)
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

@app.route('/api/v1/measurements', methods=['POST'])
def add_measurement():
    print("request is" + str(request.json), flush=True)
    if not request.json or not 'city' in request.json:
        flask.abort(400)  
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
    print("Created measurement", flush=True);
    measurements.append(measurement)
    print(measurements, flush=True)
    return jsonify(measurement), 201

@app.route('/api/v1/measurements/<string:city_name>', methods=['GET'])
def get_city_measurements(city_name):
    city_measurements = []
    print("Got into city_measurements", flush=True)
    for m in measurements:
        if m['city'] == city_name:
            print("Found city" + city_name,flush=True)
            city_measurements.append(m)
    return jsonify(city_measurements), 201

if __name__ == '__main__':
    app.run(host='localhost', port=5050, debug=True)
