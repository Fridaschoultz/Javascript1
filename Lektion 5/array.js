// Man börjar alltid från 0 i index, första elementet har index 0, andra element index 1 osv
 //                index 0        index 1      index 2.
let array_literal = ["element 1", "element 2", "element 3"];
/* Skapat en literal array som heter "array_literal" och innehåller 3 element som separeras med ett "," tecken */


let array_constructor_nummer = new Array ( 4,5,6,7); /* Här skapas en array konstruktor som heter 
array_constructor_nummer och innehåller nummer 4 5 6 7 som ej omges av "" */
let array_constructor_text = new Array ( "Frida", "Robar", "Lena"); /* Här skapas en array konstruktor som heter 
array_constructor_text och innehåller namn (text) eftersom de omges av "" */

let cars = ["Saab", "Volvo", "BMW"]; /* Skapat ett literal fält (array) som heter cars och som
innehåller tre element av text */
console.log(cars[0]); /* För att skriva ut index 0(element 1) i console skrivs följande kod */
console.log(cars[1]); /* För att skriva ut index 1(element 2) i console skrivs följande kod */
console.log(cars[2]); /* För att skriva ut index 2(element 3) i console skrivs följande kod */

/* Fält (Arrays) kan man lagara flera element (innehåll/värden) i ett och samma fält istället
för att skapa flera variabler för varje element */

console.log(cars.length); /* Detta komanndo i console skriver ut antal element i ett fält (array)
detta är bra om man inte vet hur många element som är lagrade i ett fält */

cars.sort(); /* Sorterar alla element i ett fält i bokstavsordning */



console.log(cars); /* Visar alla element som ett fält innehåller */

// följande kod adderar ett element för varje push//

let stack = []; // Här har vi skapat elementet stack som är tom, alltså innehåller inga ellement//
stack.push(1); // Följande kod används för att lägga till ett element, så nu har vi 1 element i fältet stack
stack.push(2);// Följande kod används för att lägga till ännu ett element, så nu har vi 2 element i fältet stack
stack.push(3);// Följande kod används för att lägga till ännu ett element, så nu har vi 3 element i fältet stack
stack.push(4);// Följande kod används för att lägga till ännu ett element, så nu har vi 4 element i fältet stack
stack.push(5);// Följande kod används för att lägga till ännu ett element, så nu har vi 5 element i fältet stack

//Ta bort element och börjar att ta bort från det sista elementet(element 5)//
stack.pop();//Tar bort element 5
stack.pop();//Tar bort element 4
stack.pop();//Tar bort element 3
stack.pop();//Tar bort element 2
stack.pop(); //Tar bort element 1


let test = 1 + "fyra"; //Man kan ha nummer och text i samma variabel
