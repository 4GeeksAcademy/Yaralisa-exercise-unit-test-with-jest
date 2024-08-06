// Contenido de app.js 
// console.log("Hello World")
// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3));
// module.exports = { sum };





const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 149.03;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };