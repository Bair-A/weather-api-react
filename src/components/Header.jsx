import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const Header = () => {
   return (
      <div className="header bg-main-color">
         <div className='container'>
            <Form.Group className="p-3">
               <Row className="align-items-center justify-content-between">
                  <Col className='search-field d-flex' xs="7">
                     <Form.Control className='main-search-field' type="email" placeholder="Enter city name"/>
                     <Button className='main-search-btn border-0 bg-main-color' type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                           <path
                              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                     </Button>
                  </Col>
                  <Col xs="auto">
                     <Button className='bg-light text-main-color border-0 px-4'>
                        <span className='selected'>°C</span>
                        <span className='mx-1'>/</span>
                        <span>°F</span>
                     </Button>
                  </Col>
               </Row>
            </Form.Group>
         </div>
      </div>
   );
};

export default Header;