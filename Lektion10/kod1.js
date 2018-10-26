//let score = 40;

//is satsen
/*if(score>=50) {
congratulate();*/
//}

/*function congratulate (){
    console.log("Congratulation");
}

//if else satsen

else{
    encourage();  
}

function congratulate (){
    console.log("Congratulation");
}

function encourage (){
    console.log("Annan text");
} */

//if..else-if sats. IF satsen testar villkoret
let hour = new Date().getHours();
console.log(hour);
let greeting = " ";
if(hour<12){
  greeting = "God morgon";
}

else {
    greeting = "God dag";
}


// == eller ===

let x = "5"; // eller "5"
console.log(typeof x); // string

let y = 5;

console.log(typeof 5); // number

if(x==5){ // Farlkigt!
    console.log(Number(x)+5); // 55 ...ej en addition.Det är en concat..slår ihop strängen med siffran 5 och får en sträng tillbaka
    console.log(x+5); // 55... ovan
}

if(y==5){ // ok men..
    console.log(y + 10); // 15
}

x = "5"
if(x===5){ // false. kommer inte ut något i consolen då x =5 är en sträng och if-satsen är av typen number
    console.log(y + 2); 
}

x = "5"
if(x!=5){ 
    console.log(y + 2); 
}

//använd helst ==== och !== !!!
