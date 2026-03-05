let apiKey = "5b8be06f97ac34d66e5a0c06f782ed15";
let button = document.getElementById("getWeather");

button.addEventListener("click", getWeather);

async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=" + apiKey;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temperature").innerText =
        "Temperature: " + data.main.temp + " °C";

    document.getElementById("description").innerText =
        "Weather: " + data.weather[0].description;

}
