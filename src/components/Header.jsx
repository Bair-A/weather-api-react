import UsCities from "./CitiesArr.json";
import classNames from "classnames";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const Header = ({
  singleSelections,
  setSingleSelections,
  handleClick,
  tempType,
}) => {
  const btnClass = classNames(
    "task-input",
    "bg-light",
    "text-main-color",
    "border-0",
    "px-4",
    {
      celsius: tempType,
    }
  );

  return (
    <div className="header bg-main-color">
      <div className="container">
        <Form.Group className="p-3">
          <Row className="align-items-center justify-content-between">
            <Col xs="2" lg="1">
              <img
                className="logo-icon w-100"
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                alt="API logo"
              />
            </Col>
            <Col className="search-field d-flex" xs="6">
              <Typeahead
                className="w-100"
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                options={UsCities}
                placeholder="Choose a city..."
                selected={singleSelections}
              />
            </Col>
            <Col xs="auto">
              <Button className={btnClass} onClick={() => handleClick()}>
                <span className="btn-celsius">°C</span>
                <span className="mx-1">/</span>
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
