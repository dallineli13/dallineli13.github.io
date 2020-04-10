const url = "https://dallineli13.github.io/final-project/json/guides.json"
const images = ['images/doug.jpg', 'images/deacon.jpg', 'images/spence.jpg']

fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        const data = jsonData['guides']
        data.forEach(guide => {
            const {
                name,
                certification,
                years,
                email,
                bio
            } = guide

            const wrapper = document.querySelector('.guide-wrapper')

            const card = document.createElement('div')
            const nombre = document.createElement('div')
            const cert = document.createElement('div')
            const yearsExp = document.createElement('div')
            const emails = document.createElement('div')
            const biog = document.createElement('div')
            nombre.classList.add('guide-item')
            cert.classList.add('guide-item')
            yearsExp.classList.add('guide-item')
            card.classList.add('guide')
            biog.classList.add('guide-item')
            emails.classList.add('guide-item')

            nombre.textContent = `Name: ${name}`
            cert.textContent = `Certification: ${certification}`
            yearsExp.innerHTML = `Years of Experience: ${years}`
            emails.innerHTML = `Email: ${email}`
            biog.innerHTML = `Bio: ${bio}`

            wrapper.appendChild(card)
            card.appendChild(nombre)
            card.appendChild(cert)
            card.appendChild(yearsExp)
            card.appendChild(emails)
            card.appendChild(biog)
        })
        const guides = Array.from(document.querySelectorAll('.guide'))

        for (let i = 0; i < guides.length; i++) {
            const image = document.createElement('img')
            image.setAttribute('src', images[i])
            guides[i].appendChild(image)
        }
    })