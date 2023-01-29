import React from 'react';
import {Col, Row} from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";

const MainInformation = ({city, temperature, year, dayAndMonth, icon}) => {
   return (
      <div className="main-section-bg-color">
         <div className="container">
            <Row>
               <Col>
                  <h2 className="city">{city}</h2>
                  <p className="date">{dayAndMonth}</p>
                  <p className="date">{year}</p>
                  <p className="temperature">
                     {temperature}
                  </p>
               </Col>
               <Col>
                  <WeatherIcon icon={icon}/>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default MainInformation;