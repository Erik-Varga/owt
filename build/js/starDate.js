// Variables
const starDate = document.getElementById('star-date');
const washAmt = document.getElementById('wash-amt');
const planetX = document.getElementById('planet-x');
const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Pluto', 'Planet-X'];
const random = Math.floor(Math.random() * planets.length);

washAmt.textContent = '0';
starDate.textContent = 'Stardate: ???';
planetX.textContent = planets[random];