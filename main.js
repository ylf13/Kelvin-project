//  today's forcast is 293 Kelvin
const kelvin = 293;

//  converting celcius to kelvin
var Celcius = kelvin - 293;

// Calculating Fareinheit from Celcius and rounding it
var Fareinheit = Celcius * (9/5) + 32;

console.log (Math.round (Fareinheit));


//  Round down Fareinheit
console.log(Math.floor(Fareinheit));

// replacing TEMPERATURE with Fareinheit

var TEMPERATURE = Fareinheit;
console.log('The temperature is ${TEMPERATURE} degrees.')
