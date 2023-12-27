function celsius2Fahr(c) {
    return (c * 9/5) + 32
}

function fahr2Celsius(f) {
    return (f - 32) * 5/9
}

function celsius2Kelvin(c) {
    return c + 273.15
}

function kelvin2Celsius(k) {
    return k - 273.15
}

function fahr2Kelvin(f) {
    return (f - 32) * 5/9 + 273.15
}

function kelvin2Fahr(k) {
    return (k - 273.15) * 9/5 + 32
}

module.exports = { celsius2Fahr, fahr2Celsius }