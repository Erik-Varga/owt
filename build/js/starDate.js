// Variables
const starDate = document.getElementById('star-date');
const washAmt = document.getElementById('wash-amt');
const planetX = document.getElementById('planet-x');
const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Pluto', 'Planet-X'];
const random = Math.floor(Math.random() * planets.length);

washAmt.textContent = '200';
starDate.textContent = 'Stardate: DEC|JAN';
planetX.textContent = planets[random];