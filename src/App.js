import React, {useState} from 'react';
import axios from 'axios';
import Cities from './city.list.json';
import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MainInformation from "./components/MainInformation";
import SecondaryInformation from "./components/SecondaryInformation";

function App() {
   const [weather, setWeather] = useState('');
   const weatherObj = axios.get('https://api.openweathermap.org/data/2.5/weather?id=5202009&appid=52a6e9c106af61a22be1254983414168').then(response => {
      setWeather(JSON.stringify(response))
   })
   return (
      <div className="App">
         {/*<p>{weather}</p>*/}
         <Header/>
         <MainInformation/>
         <SecondaryInformation/>
      </div>
   );
}

export default App;
