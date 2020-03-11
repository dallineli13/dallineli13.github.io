const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=404dabd7ee29a75e626eaffed07a7ea7"
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=404dabd7ee29a75e626eaffed07a7ea7'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function capitalizeFLetter(str) {
    if (str.includes(' ')) {
        let firstWord = str.split(' ')[0]
        let secondWord = str.split(' ')[1]
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + " " + secondWord
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main
    document.getElementById('high').textContent = jsObject.main.temp_max
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('wind-speed').textContent = jsObject.wind.speed
    document.getElementById('currently').textContent = capitalizeFLetter(jsObject.weather[0].description)
});

fetch(forecastUrl)
    .then(response => response.json())
    .then(jsObject => {
        const forecasts = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'))
        console.log(forecasts)
        const rows = document.querySelectorAll('.row a span')
        const icons = document.querySelectorAll('.row img')
        const days = document.querySelectorAll('th')

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(forecasts[i].dt_txt)
            const day = weekdays[date.getDay()]
            rows[i].textContent = Math.round(forecasts[i].main.temp)
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`)
            days[i].textContent = day
        }
    })


