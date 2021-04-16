import { createCard, removeCard, backgroundChange } from "./dom-manipulation";

let unitIsCelcius = true;


function switchUnit() {

  const temperatureM = document.getElementById("temp")
  const windM = document.getElementById("wind")
  const temperatureF = document.getElementById("tempF")
  const windF = document.getElementById("windF")


  const unitSwitcher = document.getElementById("unitSwitcher")
    unitSwitcher.addEventListener("click", () => {
    unitIsCelcius = !unitIsCelcius

    if (!unitIsCelcius) {
      temperatureM.style.display = "none";
      temperatureF.style.display = "block"
      windM.style.display = "none"
      windF.style.display = "block"
    } else {
      temperatureM.style.display = "block";
      temperatureF.style.display = "none"
      windM.style.display = "block"
      windF.style.display = "none"
    }
  })
}


async function fetchWeather(search) {

  try {

    const responseM = await fetch(
      `https://api.weatherbit.io/v2.0/current?key=e2f4ef04485e473a929d67447201e1d2&city=${search}&units=M`,
      { mode: "cors" }
    );
    const weatherM = await responseM.json();

    const responseF = await fetch(
      `https://api.weatherbit.io/v2.0/current?key=e2f4ef04485e473a929d67447201e1d2&city=${search}&units=I`,
      { mode: "cors" }
    );
    const weatherF = await responseF.json();

    removeCard();
    backgroundChange(weatherM.data[0].pod);
    createCard(
      weatherM.data[0].city_name,
      weatherM.data[0].temp,
      weatherF.data[0].temp,
      weatherM.data[0].rh,
      weatherM.data[0].weather.description,
      weatherM.data[0].weather.icon,
      weatherM.data[0].wind_spd,
      weatherF.data[0].wind_spd
    );
    switchUnit()
    console.log(weatherM.data[0])
    console.log(weatherF.data[0])
  } catch (error) {
    alert("Error:" + error);
  }
}


function searchCity() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      fetchWeather(input.value);
      
    }
});

  button.addEventListener("click", () => {
    fetchWeather(input.value);
  });
}

export default searchCity;
