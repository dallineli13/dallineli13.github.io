const url = "https://byui-cit230.github.io/weather/data/towndata.json"
const images = ['images/preston.jpg', 'images/sodaspings.jpg', 'images/fishhaven.jpg']

fetch(url)
.then(response => response.json())
.then(jsonData => {
    const data = jsonData['towns']
    const towns = data.filter(town => town.name === 'Fish Haven' || town.name === 'Soda Springs' || town.name === 'Preston')
    
    towns.forEach(town => {
        const { name, motto, yearFounded, currentPopulation, averageRainfall } = town

        const card = document.createElement('section')
        const cityName = document.createElement('h2')
        const mottoText = document.createElement('h4')
        const year = document.createElement('div')
        const population = document.createElement('div')
        const rain = document.createElement('div')
        const imageDiv = document.createElement('div')
        const txtWrapperDiv = document.createElement('div')
        const txtWithImage = document.createElement('div')
        imageDiv.classList.add('image')
        txtWrapperDiv.classList.add('txt')
        txtWithImage.classList.add('txtImage')

        cityName.textContent = name
        mottoText.textContent = motto
        year.innerHTML = `Year Founded: ${yearFounded}`
        population.innerHTML = `Population: ${currentPopulation}`
        rain.innerHTML = `Annual Rain Fall: ${averageRainfall}`
    
        card.appendChild(cityName)
        card.appendChild(mottoText)
        card.appendChild(txtWithImage)
        txtWithImage.appendChild(txtWrapperDiv)
        txtWrapperDiv.appendChild(year)
        txtWrapperDiv.appendChild(population)
        txtWrapperDiv.appendChild(rain)
        txtWithImage.appendChild(imageDiv)

        document.querySelector('div.container').appendChild(card)
    })
    const sections = Array.from(document.querySelectorAll('div.image'))

        for (let i = 0; i < sections.length; i++) {
            const image = document.createElement('img')
            image.setAttribute('src', images[i])
            sections[i].appendChild(image)
        }
})
