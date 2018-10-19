function meddelande(){
    console.log("Jag har anropats!");
 }
 
 meddelande();
 meddelande();
 meddelande();
 
 // Skapa en funktion med två parametrar, förnamn och efternamn
 // Funktionen visar meddelandet "Hej förnamn efternamn!" i console.
 
 function namn(firstName, lastName){
   
    console.log("Hej " + firstName + " " + lastName + "!");
 
 }
 
 namn("Frida", "Schoultz");
 
 // Skapa en funktion som multiplicerar två tal
 function multiply(a,b){
    console.log("***** Multiply ******");
    console.log(a*b);
    console.log("*********************");
 
 }
 
 multiply(10,5); // 50
 multiply(100); //Nan( 0 när man väljer förvalda parametrar)
 multiply("text", 50); //NaN
 multiply(); // 0 pga av förvalda parametrar

 console.log("------------------------"); 

 //funktioner med tre parametarar
 function age(firstName, lastName, age=20) {
       console.log(firstName + " är " + age + " år gammal! ")
 }
 age("Frida", "Schoultz", 29);
 age("kalle", "Anka", 10);
 age ("Frida"); // ej förvalda parametrar i deklarationen av parametern. function age( age=20) age("Frida", 20);
 
 // template strings

 // En funktion med ett godtyckligt antal parametrar
 function manyThings (...things) { // ... = skapar en array
     console.log(things);
 }
manyThings(1);
manyThings(1,2);
manyThings(1,2,3);
manyThings("Frida Schoultz", "kalle", "Erik");
manyThings("Frida", "Schoultz", 29);
manyThings();
