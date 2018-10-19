//deklarera en funktion
function hej (){ // OK!
    alert ("Hej från filen finctions.js");
}
hej2 (); // FEL! vi får inte anropa anonyma funktioner före funktionsuttrycket
//Anonym funktion (salnar namn)
let hej2 = function () {      // OBS Vi måste ha parenteser!
    alert ("hej från en anonym funktion"); 
}

// Detta kallas att skapa ett uttryck med hjälp av en funktion
// Function expression