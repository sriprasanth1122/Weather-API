// API: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f8878e4e6097e7d0b4de08921b471ba2

async function getweather() {
    var cityName = document.getElementById("cityName").value
    console.log(cityName)

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f8878e4e6097e7d0b4de08921b471ba2`)
    let result = await data.json()
    console.log(result)

    var weather = document.getElementById("weather")
    weather.innerHTML =
        `<div class="card" style="width: 25rem; bg-transparent;">
            <div class="card-header">
                Weather Report of ${cityName}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>Temperature: ${result.main.temp}</p>
                <p>Humidity: ${result.main.humidity}</p>
                <p>Pressure: ${result.main.pressure}</p>
                <p>Wind speed: ${result.wind.speed}</p>
                <footer class="blockquote-footer font">Data fetched from OpenWeatherApi</footer>
                </blockquote>
            </div>
        </div>`
}


