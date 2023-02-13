export const TEMPERATURE_TYPE_LOCAL_STORAGE_KEY = "TEMPERATURE_TYPE";

export const DEFAULT_TEMPERATURE_TYPE =
  localStorage.getItem(TEMPERATURE_TYPE_LOCAL_STORAGE_KEY) || true;

export const DEFAULT_CITIES = ["New York"];
export const DEFAULT_WEATHER = {
  check: true,
  data: {
    city: {
      name: "City is not selected",
    },
    list: [
      {
        main: {
          temp: "Is not defined",
          humidity: "Is not defined",
          pressure: "Is not defined",
          temp_max: "",
          temp_min: "",
        },
        wind: {
          speed: "Is not defined",
        },
        visibility: "Is not defined",
        dt_txt: "Date is not defined",
        weather: [
          {
            icon: false,
            description: false,
          },
        ],
      },
    ],
  },
};
