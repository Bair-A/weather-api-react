import React from 'react';
import {Col, Row} from "react-bootstrap";

const MainInformation = () => {
   return (
      <div>
         <div className="container">
            <Row>
               <Col>
                  <h2 className="city">London</h2>
                  <h3 className="date">Sunday <span className="time">07:09</span></h3>
                  <p className="temperature">
                     12°C
                  </p>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default MainInformation;