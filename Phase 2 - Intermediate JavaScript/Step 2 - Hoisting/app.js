// JavaScript moves declarations to the top before execution.

console.log(a);

var a = 10;


// Output
// undefined

// internally

var a;

console.log(a);

a = 10;


// error
console.log(x);
let x = 5;

// This gives error.

// let and const are hoisted but stay in:

// Temporal Dead Zone (TDZ)