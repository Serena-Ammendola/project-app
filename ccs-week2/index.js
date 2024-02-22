let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let formatDate = `${currentDay} ${currentHour}:${currentMinutes}`;
  return formatDate;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", enterCity);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

// Challenge 2
function enterCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let heading = document.querySelector("h1");
  heading.innerHTML = `${inputCity.value}`;
  let city = inputCity.value;
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);

//Challenge temperature
function showWeather(response) {
  let temperatureElement = Math.round(response.data.temperature.current);
  let temp = document.querySelector("#current-temperature");

  temp.innerHTML = `${temperatureElement}`;
}
