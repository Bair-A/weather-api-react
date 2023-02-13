import Flag from "./Flag";
import WeatherIcon from "./WeatherIcon";
import React from "react";
import { Col, Row } from "react-bootstrap";

const MainInformation = ({
  city,
  country,
  temperature,
  maxTemp,
  minTemp,
  year,
  dayAndMonth,
  icon,
  flag,
  description,
}) => {
  return (
    <div className="main-section-bg-color p-3">
      <div className="container">
        <Row className="align-items-center text-center">
          <Col>
            <h3>
              {city} {country} <Flag flag={flag} />
            </h3>
            <p className="date  fs-4 ">
              {dayAndMonth} {year}
            </p>
          </Col>
          <Col>
            <WeatherIcon className="weather-icon" icon={icon} />
            <p className="fs-4 fw-bold">t {temperature}</p>
          </Col>
          <Col>
            <p className="fs-4">max t {maxTemp}</p>
            <p className="fs-4">min t {minTemp}</p>
          </Col>
          <Col>
            <p className="fs-4">{description}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainInformation;
