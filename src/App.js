import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState('');
  const weatherObj = axios.get('https://api.weatherapi.com/v1/current.json?key=0611b6a522124ad59b2114751231901&q=London&aqi=yes').then(response => {
      setWeather(JSON.stringify(response.data))
    })
  return (
    <div className="App">
        <p>{weather}</p>

    </div>
  );
}

export default App;
