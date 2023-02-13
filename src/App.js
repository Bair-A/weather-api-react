import Header from "./components/Header";
import MainInformation from "./components/MainInformation";
import SecondaryInformation from "./components/SecondaryInformation";
import WeatherItem from "./components/WeatherItem";
import {
  DEFAULT_CITIES,
  DEFAULT_TEMPERATURE_TYPE,
  DEFAULT_WEATHER,
} from "./constants";
import {
  getDayAndMonth,
  getDescription,
  getFlag,
  getHumidity,
  getIcon,
  getPressure,
  getTemp,
  getVisibility,
  getWindSpeed,
  getYear,
  isNoon,
  setLocalStorage,
} from "./utils";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const [tempType, setTempType] = useState(DEFAULT_TEMPERATURE_TYPE);
  const handleToggleTempType = () => {
    setTempType((current) => {
      setLocalStorage(!current);
      return !current;
    });
  };
  const [singleSelections, setSingleSelections] = useState(DEFAULT_CITIES);
  const [weatherObj, setWeatherObj] = useState(DEFAULT_WEATHER);
  useEffect(() => {
    if (!singleSelections.length) return;

    const link = `https://api.openweathermap.org/data/2.5/forecast?q=${singleSelections}&appid=52a6e9c106af61a22be1254983414168`;
    axios.get(link).then((response) => setWeatherObj(response));
  }, [singleSelections]);

  const getWeatherItem = (item, index) => {
    if (!isNoon(item)) return null;

    return (
      <WeatherItem
        date={getDayAndMonth(item.dt_txt)}
        icon={getIcon(item.weather[0].icon)}
        minMax={`${getTemp(item.main.temp_max, tempType)} / ${getTemp(
          item.main.temp_min,
          tempType
        )}`}
        description={getDescription(item.weather[0].description)}
        key={index}
      />
    );
  };

  return (
    <main className="App">
      <Header
        setSingleSelections={setSingleSelections}
        singleSelections={singleSelections}
        handleClick={handleToggleTempType}
        tempType={tempType}
      />
      <MainInformation
        city={weatherObj.data.city.name}
        country={weatherObj.data.city.country}
        temperature={getTemp(weatherObj.data.list[0].main.temp, tempType)}
        maxTemp={getTemp(weatherObj.data.list[0].main.temp_max, tempType)}
        minTemp={getTemp(weatherObj.data.list[0].main.temp_min, tempType)}
        year={getYear(weatherObj.data.list[0].dt_txt)}
        dayAndMonth={getDayAndMonth(weatherObj.data.list[0].dt_txt)}
        icon={getIcon(weatherObj.data.list[0].weather[0].icon)}
        flag={getFlag(weatherObj.data.city.country)}
        description={getDescription(
          weatherObj.data.list[0].weather[0].description
        )}
      />
      <SecondaryInformation
        humidity={getHumidity(weatherObj.data.list[0].main.humidity)}
        windSpeed={getWindSpeed(weatherObj.data.list[0].wind.speed)}
        visibility={getVisibility(weatherObj.data.list[0].visibility)}
        pressure={getPressure(weatherObj.data.list[0].main.pressure)}
      />
      <Container>
        <Row className="align-items-center fs-5 mt-4 fw-bold text-center">
          <Col>Date</Col>
          <Col>Weather icon</Col>
          <Col>max / min temp</Col>
          <Col>Description</Col>
        </Row>
        {weatherObj.data.list.map((item, index) => getWeatherItem(item, index))}
      </Container>
    </main>
  );
}

export default App;
