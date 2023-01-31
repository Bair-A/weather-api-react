import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Typeahead} from 'react-bootstrap-typeahead';
import classNames from "classnames/bind";

const options = ['Moscow', 'London', 'Ankara', 'Antalya'];
const Header = ({singleSelections, setSingleSelections, handlerBtn, btnCelsius}) => {
   const btnClass = classNames(
      "task-input",
      "bg-light",
      "text-main-color",
      "border-0",
      "px-4",
      {
         "celsius": btnCelsius,
      })

   return (
      <div className="header bg-main-color">
         <div className='container'>
            <Form.Group className="p-3">
               <Row className="align-items-center justify-content-between">
                  <Col xs="1">
                     <img className="logo-icon"
                          src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                          alt="API logo"/>
                  </Col>
                  <Col className='search-field d-flex' xs="7">
                     <Typeahead
                        className="w-100"
                        id="basic-typeahead-single"
                        labelKey="name"
                        onChange={setSingleSelections}
                        options={options}
                        placeholder="Choose a city..."
                        selected={singleSelections}
                     />
                  </Col>
                  <Col xs="auto">
                     <Button className={btnClass} onClick={() => handlerBtn()}>
                        <span className="btn-celsius">°C</span>
                        <span className='mx-1'>/</span>
                        <span className="btn-fahrenheit">°F</span>
                     </Button>
                  </Col>
               </Row>
            </Form.Group>
         </div>
      </div>
   );
};

export default Header;