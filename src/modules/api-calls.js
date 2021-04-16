import { createCard, removeCard, backgroundChange } from "./dom-manipulation";

// function switchUnit() {
//   const unitSwitcher = document.getElementById("unitSwitcher")
//   let unitIsCelcius = true;

//   unitSwitcher.addEventListener("click", () => {
//     unitIsCelcius = !unitIsCelcius
//     console.log(unitIsCelcius)
//   })
// }

async function fetchWeather(search) {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?key=e2f4ef04485e473a929d67447201e1d2&city=${search}`,
      { mode: "cors" }
    );
    const weather = await response.json();

    console.log(weather.data[0]);
    removeCard();
    backgroundChange(weather.data[0].pod);
    createCard(
      weather.data[0].city_name,
      weather.data[0].temp,
      weather.data[0].rh,
      weather.data[0].weather.description,
      weather.data[0].weather.icon,
      weather.data[0].wind_spd
    );
    // switchUnit()
  } catch (error) {
    alert("Error:" + error);
  }
}

function searchCity() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      fetchWeather(input.value);;
    }
});

  button.addEventListener("click", () => {
    fetchWeather(input.value);
  });
}

export default searchCity;
