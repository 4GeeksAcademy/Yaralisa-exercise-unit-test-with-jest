// console.log("Hello World");

// const { sum } = require('./app.js');
// // Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(7.2);
})