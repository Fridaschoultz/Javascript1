//Skriv en funktion "welcome" som skriver ut "V\'e4lkommen!" i consolen.\par

function welcome(){
    
}
console.log("Välkommen!");

//Skriv en funktion med ett argument "name". Funktionen ska skriva ut "Välkommen name!" i consolen.\par

function hello(name){
    return name
}
console.log("Välkommen name!");

/*Skriv en funktion som tar in två tal, "num1" och "num2". 
Låt funktionen skriva ut summan av de två talen i consolen.\par*/

function summa (num1, num2){
    console.log(num1 +num2);

}
summa(1,4);

/*Skriv en funktion  som tar in två tal, "num1" och "num2". 
Låt funktionen skriva ut "num1+num2=summan" dvs om num1 = 1 och om num2=2 så
 ska det stå "1+2=3" i consolen.\par*/

 function summan (num1,num2){
     console.log(num1 + "+" + num2 + "=" + (num1+num2));
 }
 summan (1,4);

 /* Skriv en funktion som läser in två tal, "num1" och "num2". 
 Låt funktionen skriva ut "num1^num2=ans" i consolen. \pa r*/ 

 function summan (num1,num2){
console.log(num1 + "^" + num2 + "=" + Math.pow(num1, num2));
 }
 summan(1,4);

 /*
 Skriv en funktion som tar in ett tal och returnerar
samma tal men utan decimaltecken. 
Ex: 3.1 ska bli 3 och 4.7 ska bli 4.\par*/

function a (tal){
    console.log(Math.round(tal)); // eller Math.floor eller ceil för att avrunda ner till närmsta heltal
}
a(3.5);

/* Skriv en funktion utan argument som returnerar ett slumpmässigt heltal mellan 1 och 10.*/

function tal(){
    return Math.random(1,10);
}
console.log(tal);
