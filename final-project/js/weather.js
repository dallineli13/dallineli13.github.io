const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&APPID=404dabd7ee29a75e626eaffed07a7ea7'

fetch(apiURL)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData)
        document.getElementById('currently').textContent = jsonData.main.temp
        document.getElementById('high').textContent = jsonData.main.temp_max
        document.getElementById('humidity').textContent = jsonData.main.humidity
        document.getElementById('wind-speed').textContent = jsonData.wind.speed

        document.querySelector('.weather-icon img').setAttribute('src', `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
    })