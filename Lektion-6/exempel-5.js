// deklarerar en funktion med en paremeter
function hello (message = "Welcome to my site"){

console.log(message);
}

// anropa funktionen
hello("Här kommer meddelande nr 1!");
hello("Här kommer meddelande nr 2!");
hello("Här kommer meddelande nr 3!");
// Data som skcikas vid anropet kallas argument (meddelande) string parameter


hello (12345); // int parameter
hello (true); // boolean parameter
hello (); // undefined parameter!! Vi löser detta med en förvald parameter(default) i deklarationen

console.log("------------------------"); 
//skapa en funktion som beräknar summan av två tal. Får ej skicka parametar som siffror
function sum (x= 0,y= 0){
console.log(x+y);
}
sum(7,9);
sum(); // NaN ,not a number
sum(123, 456,789); // plusar ihop 123+456=579
sum(123);
