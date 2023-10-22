let cityInput = document.getElementById("cityInput");
let cityOutput = document.getElementById("city");
let time = document.getElementById("date");
let tempOutput = document.getElementById("temp");
let descOutput = document.getElementById("desc");
let windOutput = document.getElementById("wind");
let addInput = document.getElementById("btn")
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
function convertToCel(value) {
  return (value - 273).toFixed(2);
}
async function GetWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
      ${cityInput.value}&appid=${apiKey}`)
  ).json();
console.log(weatherResult);
  setInfo(weatherResult);
}
function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];
  cityOutput.innerHTML = `${cityName}`;
  descOutput.innerHTML = `${description}`;
  tempOutput.innerHTML = `${convertToCel(temp)}°c`;
  windOutput.innerHTML = `${wind} km/h`;
}
addInput.addEventListener("click", GetWeather);
