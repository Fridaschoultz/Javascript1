// Övning 1
function capitalize_1 (str){
     //den första bokstaven
     let firstChar = str.charAt(0); // hämta index som finns i index 0
     // omvandlar första tecknet till en versal
     firstChar = firstChar.toUpperCase();
     // sen hämtar vi resten från tecken 2(index i) till slutet
     let resten = str.slice(1); // eller substring (1)
     //skapa en ny sträng
     let result = firstChar + resten;
     return result

     // vi har använt 3 metoder
}
let test ="Hej och välkommen";
//capitalize(str);
console.log(capitalize_1(test));



//Version 2
function capitalize_2 (str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
}

// Övning 2 - skapa en funktion

function maxArray (a) {
    return Math.max(...a);
}
console.log(maxArray([1,3,5,7])); // 7

// metoden Random, slumptal. 

console.log(Math.random()); //slumptal mellan 0 och 1
// slumptal mellan 1 och 10, med floor
console.log(Math.floor(Math.random() * 10 + 1)); 
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 10 + 1));

// slumptal med ceil
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));








