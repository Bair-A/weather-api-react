import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cities from './city.list.json';
import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MainInformation from "./components/MainInformation";
import SecondaryInformation from "./components/SecondaryInformation";


function App() {
   // weatherObj.data.list.main.temp
   const defaultWeather = {
      data: {
         city: {
            name: 'City is not selected',
         },
         list: [
            {
               main: {
                  temp: 100,
               }
            }
         ]
      }
   }
   const [singleSelections, setSingleSelections] = useState([]);
   const [weatherObj, setWeatherObj] = useState(defaultWeather);
   useEffect(() => {
      if (!singleSelections.length) return;
      const link = `https://api.openweathermap.org/data/2.5/forecast?q=${singleSelections}&appid=52a6e9c106af61a22be1254983414168`;
      console.log(link);
      axios.get(link).then(response =>  {
         setWeatherObj(response)
         console.log(response)
         }
      );
   }, [singleSelections])

   return (
      <div className="App">
         <Header setSingleSelections={setSingleSelections} singleSelections={singleSelections}/>
         <MainInformation weatherObj={weatherObj.data.city.name} temperature={weatherObj.data.list[0].main.temp}/>
         <SecondaryInformation/>
      </div>
   );
}

export default App;
