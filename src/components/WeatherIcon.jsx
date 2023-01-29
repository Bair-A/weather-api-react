import React from 'react';

const WeatherIcon = ({icon}) => {
   return (
      <div>
         <img src={icon} alt="weather-icon"/>
      </div>
   );
};

export default WeatherIcon;