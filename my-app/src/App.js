import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState( ["loading"] );
  const [page, setPage] = useState(1);
  /**
   * Creates an effect to update list of cities
   * from api call.
   * Credit to Robin Wieruch for original code
   * https://www.robinwieruch.de/react-hooks-fetch-data
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.openaq.org/v1/cities?country=US');
      // USE BELOW FOR PRESENTATION
      // const result = await axios('https://api.openaq.org/v1/cities?country=US&limit=1000');
      setData(result.data.results);
      // setCitySelected(result.data.results[0].name)
      console.log(citySelected);
      console.log("first city" + result.data.results[0].name);
    };

    fetchData();
  }, []);
  
  const [citySelected, setCitySelected] = useState("");
  const [measurements, setMeasurements] = useState([]);
  useEffect(() => {
    const fetchCitySelected = async () => {
      console.log("city chosen" + citySelected);
      if(citySelected != ""){
        const result = await axios('https://api.openaq.org/v1/measurements?country=US&city=' + citySelected);
        console.log(result.data.results);
        setMeasurements(result.data.results);
      }
      
    };

    fetchCitySelected();
  }, [citySelected]);

  const [userMeasurement, setUserMeasurement] = useState({} );
  useEffect(() => {
    const fetchUserMeasurement= async () => {
      console.log("city chosen" + citySelected);
      if(citySelected != ""){
        const result = await axios('https://api.openaq.org/v1/measurements?country=US&city=' + citySelected);
        console.log(result.data.results);
        setMeasurements(result.data.results);
      }
      
    };

    fetchUserMeasurement();
  }, [userMeasurement]);

  async function submitUserMeasurement(event) {
    const city = event.target[0].value;
    const coordinates = event.target[1].value;
    const country = event.target[2].value;
    const date = event.target[3].value;
    const location = event.target[4].value;
    const parameter = event.target[5].value;
    const unit = event.target[6].value;
    const value = event.target[7].value;

    const measurement = {
      "city": city,
      "coordinates": coordinates,
      "country": country,
      "date": date,
      "location": location,
      "parameter": parameter,
      "unit": unit,
      "value": value
    }

    console.log("Measurement Entered: " + JSON.stringify(measurement));
    var result;
    try{
        result = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://localhost:5050/api/v1/measurements',
        data : JSON.stringify(measurement)
      });
      console.log(result.data);
    } finally {
      setUserMeasurement(result.data);
      console.log("result" + result);
    }
  }

  return (
    
    <div className="App">
      <header className="App-header">
      <label form="cities">Choose a city: </label>
        <select name="cities" id="cities" value={citySelected} onChange={event => setCitySelected(event.target.value)}>
          {data.map(city => (
            <option value={city.name}>{city.name}</option>
          ))}
        </select>
        <p>
          
        </p>
        <p>
          Input a new measurement:
        </p>
        <form onSubmit={submitUserMeasurement}>
          <div>
            <label for="cityM">Enter a city: </label>
            <input type="text" id="cityM" name="cityM" value={userMeasurement.city}></input>
          </div>
          <div>
            <label for="coordinatesM">Enter a coordinates: </label>
            <input type="text" id="coordinatesM" name="coordinatesM"></input>
          </div>
          <div>
            <label for="countryM">Enter a country: </label>
            <input type="text" id="countryM" name="countryM"></input>
          </div>
          <div>
            <label for="dateM">Enter a date: </label>
            <input type="text" id="dateM" name="dateM"></input>
          </div>
          <div>
            <label for="locationM">Enter a location: </label>
            <input type="text" id="locationM" name="locationM"></input>
          </div>
          <div>
            <label for="parameterM">Enter a parameter: </label>
            <input type="text" id="parameterM" name="parameterM"></input>
          </div>
          <div>
            <label for="unitM">Enter a unit: </label>
            <input type="text" id="unitM" name="unitM"></input>
          </div>
          <div>
            <label for="valueM">Enter a value: </label>
            <input type="text" id="valueM" name="valueM"></input>
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
        <label form="measurements">Measurements Below</label>
            {/* {Object.entries(measurements).map(([key, value]) => 
            <p> {JSON.stringify(key)} + " " + {JSON.stringify(value)})</p>)} */}
            <table>
              <colgroup span="5"></colgroup>
              <tr>
                <th>Location</th>
                <th>Parameter</th>
                <th>Unit</th>
                <th>Value</th>
                <th>Date</th>
              </tr>
              {measurements.map(measurement => (
                <tr>
                  <th>{measurement.location}</th>
                  <th>{measurement.parameter}</th>
                  <th>{measurement.unit}</th>
                  <th>{measurement.value}</th>
                  <th>{measurement.date.local}</th>
                </tr>
              ))}
          </table>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
