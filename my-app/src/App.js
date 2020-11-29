import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
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
      const result = await axios('https://api.openaq.org/v1/cities');
      setData(result.data.results);
      console.log(data);
    };

    fetchData();
  }, []);
  


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Measurementss:
          <label for="cities">Choose a city:</label> */
            <select name="cities" id="cities">
              {data.map(city => (
                <option value={city.count}>{city.name}</option>
              ))}
              {console.log(data)}
            </select>
        </p>
        <p>
          Edit?:
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
