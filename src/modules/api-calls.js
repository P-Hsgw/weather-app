import { createCard, removeCard } from "./dom-manipulation";

async function fetchWeather(search) {
  try {
    const response = await fetch(
      `http://api.weatherbit.io/v2.0/current?key=e2f4ef04485e473a929d67447201e1d2&city=${search}`,
      { mode: "cors" }
    );
    const weather = await response.json();
  
    console.log(weather.data[0]);
    removeCard();
  
    createCard(
      weather.data[0].city_name,
      weather.data[0].temp,
      weather.data[0].rh,
      weather.data[0].weather.description,
      weather.data[0].weather.icon,
      weather.data[0].wind_spd
    );
  } catch (error) {
    alert("Error:" + error)
  }
  
}

function searchCity() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    fetchWeather(input.value);
  });
}

export default searchCity;
