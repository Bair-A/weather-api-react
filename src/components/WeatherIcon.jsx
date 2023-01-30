import React from 'react';

const WeatherIcon = ({icon}) => {
   return (
      <p>
         <img src={icon} alt="weather-icon"/>
      </p>
   );
};

export default WeatherIcon;