function celsius2Fahr(c) {
    return (c * 9/5) + 32
}
console.log(celsius2Fahr(0))

function fahr2Celsius(f) {
    return (f - 32) * 5/9
}
console.log(fahr2Celsius(0))

function celsius2Kelvin(c) {
    return c - 273.15
}
console.log(celsius2Kelvin(0))

function kelvin2Celsius(k) {
    return k + 273.15
}
console.log(kelvin2Celsius(0))

function fahr2Kelvin(f) {
    return (f - 32) * 5/9 + 273.15
}
console.log(fahr2Kelvin(0))

function kelvin2Fahr(k) {
    return (k - 273.15) * 9/5 + 32
}
console.log(kelvin2Fahr(0))

module.exports = { celsius2Fahr, fahr2Celsius, celsius2Kelvin, kelvin2Celsius, fahr2Kelvin, kelvin2Fahr}