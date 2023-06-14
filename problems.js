// Fahrenheit to celsius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// (32F - 32 x 5/9 = 0C)

function getCelsius(fahrenheit) {
    return fahrenheit.map(value => (value -32) * 5/9)
}