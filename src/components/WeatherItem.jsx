import React from 'react';
import {Row, Col} from "react-bootstrap";

const WeatherItem = ({date, icon, minMax, description}) => {
   return (
      <div className="container">
         <Row className="d-flex align-items-center fs-5">
            <Col>
               {date}
            </Col>
            <Col>
               <img src={icon} alt="weather icon"/>
            </Col>
            <Col>
               {minMax}
            </Col>
            <Col>
               {description}
            </Col>
         </Row>
      </div>
   );
};

export default WeatherItem;