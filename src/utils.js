import { TEMPERATURE_TYPE_LOCAL_STORAGE_KEY } from "./constants";

export const setLocalStorage = (value) =>
  localStorage.setItem(TEMPERATURE_TYPE_LOCAL_STORAGE_KEY, value);
export const getWindSpeed = (wind) => (isNaN(wind) ? wind : wind + " km/h");
export const getHumidity = (humidity) =>
  isNaN(humidity) ? humidity : humidity + "%";
export const getTemp = (temp, tempType) => {
  if (isNaN(temp)) return temp;
  if (tempType) return Math.round(temp - 273) + " ℃";
  return temp + " °F";
};
export const getVisibility = (visibility) =>
  isNaN(visibility) ? visibility : visibility / 1000 + "km";
export const getPressure = (pressure) =>
  isNaN(pressure) ? pressure : pressure + " hPa";
export const getYear = (date) =>
  isNaN(date.slice(0, 4)) ? date : date.slice(0, 4);
export const monthNames = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const getDayAndMonth = (date) =>
  isNaN(date.slice(0, 4))
    ? ""
    : `${date.slice(8, 10)}  ${monthNames[+date.slice(5, 7)]}`;
export const getIcon = (icon) =>
  icon ? `https://openweathermap.org./img/wn/${icon}@2x.png` : "";
export const getDescription = (description) => (description ? description : "");
export const getFlag = (flag) => {
  if (!flag) return;
  let lowercaseFlag = flag.toLowerCase();
  return `https://openweathermap.org/images/flags/${lowercaseFlag}.png`;
};

export const isNoon = (item) => item.dt_txt.slice(11) !== "12:00:00";
