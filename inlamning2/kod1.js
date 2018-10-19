// Exempel 1- adderar metoder till objektet

function person(name, age) {
    this.name = name;
    this.age= age;        /* Funktionen person skapas och
                            anger två parametrar name och age.
                            Metoden this anges för att referera 
                            till det objekt man vill visa. I detta
                            fall så vill vi visa parametrarna name och age*/
}

let a = "Frida Schoultz, " + 29; /* Variabeln a skapas. Den innehåller
                                  text (namn) och ålder (age)*/
console.log(a); // Här visas resultatet, som sparats i variabeln a, i konsolen. 

console.log("------------------------");

// Exempel två - skapa objekt 

var fridaSchoultz = {
    hairColor: "Darkblonde",
    favColor:"Darkred",
    cat: true,
    age: 29,

    check: function (){
      return this.hairColor;
    }
}
console.log(fridaSchoultz.age);

//function f (){





//document.write("Pluggar Javascript", "Läser böcker", "Kollar på film");






                  