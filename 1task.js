// celsius to fahrenheit
// 1 celsius = 33.8
function celsiusTOFahrenheit(celsius){
    const fahrenheit = (celsius*9/5) + 32;
    return fahrenheit;
}

const temperature = celsiusTOFahrenheit (33)
console.log(temperature);