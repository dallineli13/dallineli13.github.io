function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide")
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
const dayName = days[d.getDay()]
const day = new Date().getDate()


const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const m = new Date()
const monthName = mlist[m.getMonth()]

const year = new Date().getFullYear()


document.getElementById("today").textContent = `${dayName}, ${day} ${monthName} ${year}`;

if (dayName !== "Friday") {
    const el = document.getElementById("banner").style.display = "none";
}