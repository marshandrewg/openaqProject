import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useForm } from "react-hook-form";
import logo from './logo.svg';
// import './App.css';
import MeasurementForm from './MeasurementForm';
import SelectCityForm from './SelectCityForm';
import ExampleNavBar from './ExampleNavBar';
import ExampleToast from './ExampleToast';


import 'bootstrap/dist/css/bootstrap.min.css';
import MeasurementTable from './MeasurementTable';

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
      setCitySelected(result.data.results[0].name)
      console.log(citySelected);
      console.log("first city" + result.data.results[0].name);
    };

    fetchData();
  }, []);
  
  /**
   * Creates an effect to update the city selected
   * and fetch the measurements
   */
  const [citySelected, setCitySelected] = useState("");
  const [measurements, setMeasurements] = useState([]);
  useEffect(() => {
    const fetchCitySelected = async () => {
      console.log("city chosen" + citySelected);
      var result = await axios('https://api.openaq.org/v1/measurements?country=US&city=' + citySelected);
      console.log(result);
      // var result2 = await axios('http://localhost:5050/api/v1/measurements/' + citySelected);

      // var totalResults = result.data.results
      // totalResults = totalResults.concat(result2.data);
      setMeasurements(result.data.results);
      console.log(measurements);
      // console.log("Total Results");
      // console.log(totalResults);
      // if(citySelected){
        
      // }
      
    };

    fetchCitySelected();
  }, [citySelected]);

  /**
   * Sends a PUT request after user enters city information
   * and adds the resulting call back to the list of measurements
   */
  const [userMeasurement, setUserMeasurement] = useState({});
  useEffect(() => {
    const fetchUserMeasurement= async () => {
      console.log("new measurement" + JSON.stringify(userMeasurement));
      const result = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://localhost:5050/api/v1/measurements',
        data : JSON.stringify(userMeasurement)
      });
      console.log("Fetching user stuff" + (JSON.stringify(result.data)));
      if(result.data.city === citySelected){
        measurements.push(result.data);
      }
      
      console.log(measurements);
    };

    fetchUserMeasurement();
  }, [userMeasurement]);

  /**
   * Translates text fields into dict for uploading measurements.
   * @param {*} event Submit button event
   */
  function submitUserMeasurement(event) {
    console.log("event");
    console.log(event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // event.preventDefault();
    setUserMeasurement(
      {
        "city" : event.target[0].value,
        "coordinates" : event.target[1].value,
        "country" : event.target[2].value,
        "date" : event.target[3].value,
        "location" : event.target[4].value,
        "parameter" : event.target[5].value,
        "unit" : event.target[6].value,
        "value" : event.target[7].value
      }
    )
    console.log(userMeasurement);
  }

  return (
    
    <div className="App">
      <header className="App-header">
      <Container className="mt-5">
        <h1 className="header">OpenAQ App <Badge variant="secondary">Now running with React-Bootstrap!</Badge></h1>
      </Container>

      <Container className="p-3">
      <ExampleToast className="p-4">
          <span role="img" aria-label="tada">
            🎉
          </span>
           This app allows you to select a city and view air quality measurements from
          a public api hosted at openaq.org. To begin, click on the select button below and choose a city!  
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Container>

      <Container className="p-3">
      <Row>
      <Col>
      <SelectCityForm
        options=
        {data.map(city => (
          <option value={city.name}>{city.name}</option>
        ))}
        handleChange = {event => setCitySelected(event.target.value)}
      >
      </SelectCityForm>
      <MeasurementTable
            rows = 
              {measurements.map(measurement => (
                <tr>
                  <td>{measurement.location}</td>
                  <td>{measurement.parameter}</td>
                  <td>{measurement.unit}</td>
                  <td>{measurement.value}</td>
                  <td>{(Date(measurement.date))}</td>
                </tr>
              ))}
          >
          </MeasurementTable>
      </Col>
      
      <Col>
      <MeasurementForm
        handleSubmit= {event => submitUserMeasurement(event)}
      >
      </MeasurementForm>
      </Col>
      </Row>
        </Container>

        
      </header>
    </div>
  );
}

export default App;
