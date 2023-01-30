import React from 'react';
import {Col, Row} from "react-bootstrap";

const SecondaryInformation = ({humidity, windSpeed, visibility, pressure, descripton}) => {
   return (
      <div className="bg-main-color text-white py-5">
         <div className="container">
            <Row>
               <Col>
                  <h3>Description</h3>
                  <span>{descripton}</span>
               </Col>
               <Col>
                  <h3>Humidity</h3>
                  <span>{humidity}</span>
               </Col>
               <Col>
                  <h3>Wind Speed</h3>
                  <span>{windSpeed}</span>
               </Col>
               <Col>
                  <h3>Visibility</h3>
                  <span>{visibility}</span>
               </Col>
               <Col>
                  <h3>Pressure</h3>
                  <span>{pressure}</span>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default SecondaryInformation;