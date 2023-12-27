function celsius2Fahr(c) {
    return (c * 9/5) + 32
}

function fahr2Celsius(f) {
    return (f - 32) * 5/9
}

module.exports = { celsius2Fahr, fahr2Celsius }