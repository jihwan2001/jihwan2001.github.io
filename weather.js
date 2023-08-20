const API_KEY = "b4cf5a4af929b5f08aa8f165c1008767";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("cant find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const locations = [
  { name: "London", lat: "51.5073509", lon: "0.1277583", pic: "england.jpeg" },
  { name: "Seoul", lat: "37.5642135", lon: "127.0016985", pic: "seoul.png" },
  { name: "Paris", lat: "48.856614", lon: "2.3522219", pic: "france.jpg" },
  { name: "Wasington", lat: "38.9071923", lon: "77.0368707", pic: "us.jpg" },
];
const rdLoc = locations[Math.floor(Math.random() * locations.length)];

const lat = document.querySelector("#lat");
const lon = document.querySelector("#lon");
// const API_KEY = "b4cf5a4af929b5f08aa8f165c1008767";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${rdLoc.lat}&lon=${rdLoc.lon}&appid=${API_KEY}&units=metric`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather2 span:first-child");
    const city = document.querySelector("#weather2 span:last-child");

    city.innerText = rdLoc.name;
    weather.innerText = data.weather[0].main;
  });

const bgimg = document.createElement("img");
bgimg.src = `picture/${rdLoc.pic}`;
document.body.appendChild(bgimg);
