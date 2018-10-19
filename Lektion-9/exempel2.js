// Arbeta med objektet Number

let PI = 3.14159; // blir number i resultat om man inte lägger in "3.14159". då returnerar sträng
console.log(typeof PI);
console.log(PI.toFixed(2)); // avrundar till to decimaler, returnerar 3.14

console.log(PI.toPrecision(2)); // returnerar 3.1

//visa Max-värdet på ett nummer i js
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE + 10); 
console.log(Number.MAX_VALUE * 10);  //infinity

// NaN

let x;
console.log(x); // undefined
x= x+2; //NaN
console.log(x);
//statiska metoder
console.log(Number.isNaN()); // false
console.log(Number.isNaN(x)); // true

// Objektet Math
PI = Math.PI
console.log(PI); 
 // upphöjt till 
console.log(Math.pow(2, 2)); // 2
console.log(Math.pow(2, 4)); // 16
console.log(Math.sqrt(25)); // 5


//Ciel och floor
let tal = 10.10;
console.log(Math.ceil(tal)); // 11
tal = 10.99;
console.log(Math.floor(tal)); // 10

// max och min

console.log(Math.max(1,2,3,4)); // 4

// Datum och tid (date)






