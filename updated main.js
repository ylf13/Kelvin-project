///  today's forcast is 293 Kelvin
const Kelvin = 293;

//  converting Celcius to Kelvin
const Celcius = Kelvin - 273;

// Calculating Fareinheit from Celcius
// Round results to nearest whole number
const Fareinheit = Math.floor (Celcius * (9/5) + 32);

console.log ('The temperature is ${Fareinheit} degrees Fareinheit');

