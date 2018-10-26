/*let mal = 10000000;
let dag = 1;
let spargris = 0;
for (let krona = 1; spargris<mal; dag++){
    spargris += krona; 
    krona *= 2;
}

console.log(dag); */


//Steg 1- skapa nödvändiga variabler

let dag = 1;
let lon = 1; // 1 kr
//steg 2-arbeta med vilkoret(minst 10 miljoner)
while(lon<10000000){
    console.log("Dag " + dag + ", Lön: " + lon);
    // man måste jobba
    dag++;
    // lön dubblas
    lon *= 2; // eller lon = lon *2
}

// sluta jobba - lön är mer än 10 miljoner

console.log("Du måste jobba " + dag + " dagar för att tjäna minst 10 miljoner!");


// samma sak med en for sats

dag =1;
lon = 1;
for(dag =1; lon <=10000000; dag++) {
    lon *= 2;
}
console.log("-----------------for sats----------------");
console.log("Du måste jobba " + dag + " dagar för att tjäna minst 10 miljoner!");






 