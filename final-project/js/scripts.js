function toggleImageDarkness() {
    document.querySelector('.banner img').classList.toggle('dark')
    document.querySelector('.banner-txt-wrapper').classList.toggle('hide')
}

function toggleMenu() {
    document.getElementById('navbar').classList.toggle('hide')
    document.querySelector('.flex-nav button').classList.toggle('hide')
}

