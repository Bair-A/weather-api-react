import React from 'react';

const WeatherIcon = ({icon}) => {
   return (
      <p className='m-0'>
         <img src={icon} alt="weather-icon"/>
      </p>
   );
};

export default WeatherIcon;