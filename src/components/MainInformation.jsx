import React from 'react';
import {Col, Row} from "react-bootstrap";

const MainInformation = ({weatherObj, temperature}) => {
   return (
      <div>
         <div className="container">
            <Row>
               <Col>
                  <h2 className="city">{weatherObj}</h2>
                  <h3 className="date">Sunday and time</h3>
                  <p className="temperature">
                     {temperature}
                  </p>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default MainInformation;