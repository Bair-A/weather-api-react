import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MainInformation from "./components/MainInformation";
import SecondaryInformation from "./components/SecondaryInformation";
import WeatherItem from "./components/WeatherItem";

const LOCAL_STORAGE_KEY = 'CelsiusButton';
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
               temp_max: '',
               temp_min: '',
            },
            wind: {
               speed: 'Is not defined',
            },
            visibility: 'Is not defined',
            dt_txt: 'Date is not defined',
            weather: [
               {
                  icon: false,
                  description: false,
               }
            ]
         }
      ]
   }
}

function App() {
   const setLocalStorage = (value) => localStorage.setItem(LOCAL_STORAGE_KEY, value);
   const [btnCelsius, setBtnCelsius] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || true);
   const handlerBtn = () => {
        setBtnCelsius(!btnCelsius);
        setLocalStorage(!btnCelsius);
   }
   const [singleSelections, setSingleSelections] = useState([]);
   const [weatherObj, setWeatherObj] = useState(defaultWeather);
   useEffect(() => {
      if (!singleSelections.length) return;
      const link = `https://api.openweathermap.org/data/2.5/forecast?q=${singleSelections}&appid=52a6e9c106af61a22be1254983414168`;
      console.log(link);
      axios.get(link).then(response =>  {
         setWeatherObj(response)
         // console.log(response)
         }
      );
   }, [singleSelections]);
   const getWindSpeed = (wind) => isNaN(wind) ? wind : wind + ' km/h';
   const getHumidity = (humidity) => isNaN(humidity) ? humidity : humidity + '%';
   const getTemp = (temp) => {
      if (isNaN(temp)) return temp
      if (btnCelsius) return Math.round(temp - 273) + ' ℃';
      return temp + ' °F'
   }
   const getVisibility = (visibility) => isNaN(visibility) ? visibility : visibility/1000 + 'km';
   const getPressure = (pressure) => isNaN(pressure) ? pressure : pressure + ' hPa';
   const getYear = (date) => isNaN(date.slice(0, 4)) ? date : date.slice(0, 4);
   const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   const getDayAndMonth = (date) => isNaN(date.slice(0, 4)) ? '' : `${date.slice(8, 10)}  ${monthNames[+date.slice(5, 7)]}`;
   const getIcon = (icon) => icon ? `https://openweathermap.org./img/wn/${icon}@2x.png` : '';
   const getDescription = (description) => description ? description : '';
   const getFlag = (flag) => {
      if (!flag) return
      let lowercaseFlag = flag.toLowerCase();
     return `https://openweathermap.org/images/flags/${lowercaseFlag}.png`
   }
   const getWeatherItem= (item, index) => {
      if (item.dt_txt.slice(11) !== "12:00:00") return
      return <WeatherItem date={getDayAndMonth(item.dt_txt)}
                          icon={getIcon(item.weather[0].icon)}
                          minMax={`${getTemp(item.main.temp_max)} / ${getTemp(item.main.temp_min)}`}
                          description={getDescription(item.weather[0].description)}
                          key={index}
      />
   }

   return (
      <div className="App">
         <Header setSingleSelections={setSingleSelections} singleSelections={singleSelections} handlerBtn={handlerBtn} btnCelsius={btnCelsius}/>
         <MainInformation city={weatherObj.data.city.name}
                          country={weatherObj.data.city.country}
                          temperature={getTemp(weatherObj.data.list[0].main.temp)}
                          maxTemp={getTemp(weatherObj.data.list[0].main.temp_max)}
                          minTemp={getTemp(weatherObj.data.list[0].main.temp_min)}
                          year={getYear(weatherObj.data.list[0].dt_txt)}
                          dayAndMonth={getDayAndMonth(weatherObj.data.list[0].dt_txt)}
                          icon={getIcon(weatherObj.data.list[0].weather[0].icon)}
                          flag={getFlag(weatherObj.data.city.country)}
                          descripton={getDescription(weatherObj.data.list[0].weather[0].description)}
         />
         <SecondaryInformation humidity={getHumidity(weatherObj.data.list[0].main.humidity)}
                               windSpeed={getWindSpeed(weatherObj.data.list[0].wind.speed)}
                               visibility={getVisibility(weatherObj.data.list[0].visibility)}
                               pressure={getPressure(weatherObj.data.list[0].main.pressure)}
         />
         <div className='container'>
            <Row className='align-items-center fs-5 mt-4 fw-bold text-center'>
               <Col>Date</Col>
               <Col>Weather icon</Col>
               <Col>max / min temp</Col>
               <Col>Description</Col>
            </Row>
            {weatherObj.data.list.map((item, index) => getWeatherItem(item, index))}
         </div>
      </div>
   );
}

export default App;
