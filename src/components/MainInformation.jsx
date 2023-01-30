import React from 'react';
import {Col, Row} from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import Flag from "./Flag";

const MainInformation = ({city, country, temperature, maxTemp, minTemp, year, dayAndMonth, icon, flag}) => {
   return (
      <div className="main-section-bg-color p-3">
         <div className="container">
            <Row>
               <Col>
                  <h3>{city} {country} <Flag flag={flag}/></h3>
                  <p className="date  fs-2">{dayAndMonth} {year}</p>
               </Col>
               <Col>
                  <h2>t {temperature}</h2>
                  <WeatherIcon className="weather-icon" icon={icon}/>
               </Col>
               <Col>
                  <p className="fs-3">max t {maxTemp}</p>
                  <p className="fs-3">min t {minTemp}</p>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default MainInformation;