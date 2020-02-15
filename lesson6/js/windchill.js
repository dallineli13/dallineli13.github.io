const temp = document.getElementById("high").textContent;
const speed = document.getElementById("wind-speed").textContent;

const windChill = Math.floor(35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + (0.4275 * temp * speed**0.16))

document.getElementById('wind-chill').textContent = windChill;
