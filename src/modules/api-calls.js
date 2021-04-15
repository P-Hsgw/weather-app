async function fetchWeather(search) {
  const title = document.getElementById("city");
  const temperature = document.getElementById("temp");
  const wind = document.getElementById("wind");
  const humid = document.getElementById("humid");

  const response = await fetch(
    `http://api.weatherbit.io/v2.0/current?key=e2f4ef04485e473a929d67447201e1d2&city=${search}`,
    { mode: "cors" }
  );

  const weather = await response.json();
  console.log(weather.data[0]);
  title.innerHTML = weather.data[0].city_name;
  temperature.innerHTML = `Temperature: ${weather.data[0].temp};`
  wind.innerHTML = `Wind Speed: ${weather.data[0].wind_spd}`;
  humid.innerHTML = `Humidity: ${weather.data[0].rh}`;
}

function searchCity() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    fetchWeather(input.value);
  });
}

export default searchCity;
