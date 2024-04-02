function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayTemp(response) {
  let currentTemp = document.querySelector(".current-temp-value");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
  currentTemp.innerHTML = temp;
}

function displayHumidity(response) {
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let city = input.value;
  let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
  axios.get(apiUrl).then(displayHumidity);
}
let currentDate = new Date();
let currentTime = document.getElementById("current-time");

currentTime.innerHTML = formatDate(currentDate);

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);
