const { celsius2Fahr, fahr2Celsius, celsius2Kelvin, kelvin2Celsius, fahr2Kelvin, kelvin2Fahr} = require('./temperature')

test("convert 0C to be equal 32F", () => {
    expect(celsius2Fahr(0)).toBeCloseTo(32)
})

test("convert 32F to be 0C", () => {
    expect(fahr2Celsius(32)).toBeCloseTo(0)
})

test("convert 0C to -273.15K", () => {
    expect(celsius2Kelvin(0)).toBeCloseTo(-273.15)
})

test("convert -273.15K to 0C", () => {
    expect(kelvin2Celsius(-273.15)).toBeCloseTo(0)
})