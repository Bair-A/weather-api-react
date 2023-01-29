import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cities from './city.list.json';
import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MainInformation from "./components/MainInformation";
import SecondaryInformation from "./components/SecondaryInformation";


function App() {
   const defaultWeather = {
      check: true,
      data: {
         city: {
            name: 'City is not selected',
         },
         list: [
            {
               main: {
                  temp: 'Is not defined',
                  humidity: 'Is not defined',
                  pressure: 'Is not defined',
               },
               wind: {
                  speed: 'Is not defined',
               },
               visibility: 'Is not defined',
               dt_txt: 'Date is not defined',
               weather: [
                  {
                     icon: false,
                  }
               ]
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
   }, [singleSelections]);
   const getWindSpeed = (wind) => isNaN(wind) ? wind : wind + ' km/h';
   const getHumidity = (humidity) => isNaN(humidity) ? humidity : humidity + '%';
   const getTemp = (temp) => isNaN(temp) ? temp : Math.round(temp - 273) + ' ℃';
   const getVisibility = (visibility) => isNaN(visibility) ? visibility : visibility/1000 + 'km';
   const getPressure = (pressure) => isNaN(pressure) ? pressure : pressure + ' hPa';
   const getYear = (date) => isNaN(date.slice(0, 4)) ? date : date.slice(0, 4);
   const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   const getDayAndMonth = (date) => isNaN(date.slice(0, 4)) ? '' : `${date.slice(8, 10)}  ${monthNames[+date.slice(5, 7)]}`;
   const getIcon = (icon) => icon ? `https://openweathermap.org./img/wn/${icon}@2x.png` : '';

   return (
      <div className="App">
         <Header setSingleSelections={setSingleSelections} singleSelections={singleSelections}/>
         <MainInformation city={weatherObj.data.city.name}
                          temperature={getTemp(weatherObj.data.list[0].main.temp)}
                          year={getYear(weatherObj.data.list[0].dt_txt)}
                          dayAndMonth={getDayAndMonth(weatherObj.data.list[0].dt_txt)}
                          icon={getIcon(weatherObj.data.list[0].weather[0].icon)}
         />
         <SecondaryInformation humidity={getHumidity(weatherObj.data.list[0].main.humidity)}
                               windSpeed={getWindSpeed(weatherObj.data.list[0].wind.speed)}
                               visibility={getVisibility(weatherObj.data.list[0].visibility)}
                               pressure={getPressure(weatherObj.data.list[0].main.pressure)}

         />
      </div>
   );
}

export default App;
