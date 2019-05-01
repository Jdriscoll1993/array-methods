const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets");



/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(planet){
    console.log(planet);
    planetEl.innerHTML += `
    <h2>${planet}</h2>
    `
})



/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let upperCasePlanets = planets.map(function(planet){
    const nameCapital = planet.charAt(0).toUpperCase() + planet.slice(1)
    planetEl.innerHTML += `
    <h2>${nameCapital}</h2>`
    return nameCapital;
})
console.log(upperCasePlanets);

 

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let planetsWithAnE = planets.filter(function(planet){
    if (planet.includes("e") === false){
        return false;
    }
    return true;
})
console.log(planetsWithAnE);
planetEl.innerHTML += planetsWithAnE.join(`<hr>`)


// reduce method
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

console.log("monthlyRainFall", monthlyRainfall);
const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => {
  console.log("currentTot (parameter) nextValue: number", nextValue)
  return currentTotal =+ nextValue
})
// const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall)