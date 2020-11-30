import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState( ["loading"] );
  /**
   * Creates an effect to update list of cities
   * from api call.
   * Credit to Robin Wieruch for original code
   * https://www.robinwieruch.de/react-hooks-fetch-data
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.openaq.org/v1/cities?country=US');
      setData(result.data.results);
      // setCitySelected(result.data.results[0].name)
      console.log(citySelected);
      console.log("first city" + result.data.results[0].name);
    };

    fetchData();
  }, []);
  
  const [citySelected, setCitySelected] = useState("");
  useEffect(() => {
    const fetchCitySelected = async () => {
      console.log("city chosen" + citySelected);
      if(citySelected != ""){
        const result = await axios('https://api.openaq.org/v1/measurements?country=US&city=' + citySelected);
        console.log(result.data.results);
      }
      
    };

    fetchCitySelected();
  }, [citySelected]);




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
          Edit?:
        </p>
        <p>
          Measurements:
        </p>
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
