const API_KEY = "59f14e746ba6f4b0acd85b83f5a1f92f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("찾지 못함");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
