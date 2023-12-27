const {celsius2Fahr, fahr2Celsius} = require('./temperature')

test("convert 0C to be equal 32F", () => {
    expect(celsius2Fahr(0)).toBe(32)
})

//test("convert 32F to be 0C", () => {
//    expect(fahr2Celsius(32)).toBe(0)
//})