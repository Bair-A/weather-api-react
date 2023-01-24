import React from 'react';
import {Col, Row} from "react-bootstrap";

const SecondaryInformation = () => {
   return (
      <div className="bg-main-color text-white py-5">
         <div className="container">
            <Row>
               <Col>
                  <h3>Chance of Rain</h3>
                  <span>12%</span>
               </Col>
               <Col>
                  <h3>Humidity</h3>
                  <span>60%</span>
               </Col>
               <Col>
                  <h3>Wind Speed</h3>
                  <span>10 k/h</span>
               </Col>
               <Col>
                  <h3>Visiblity</h3>
                  <span>100km</span>
               </Col>
               <Col>
                  <h3>Pressure</h3>
                  <span>1015 hPa</span>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default SecondaryInformation;