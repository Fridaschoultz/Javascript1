// Steg 1- läsa in två saker, läsa in data
// skapa  två nödvändiga variabler
let antalMinuter = prompt ("Ange antalet minuter?");
//console.log(antalMinuter);   testa
let kostnadPerMinut = prompt ("Ange din kostnad per minut?")
//console.log(kostnadPerMinut);    testa

// steg 2- beräkningar
//bersäkna total kostnad
let rabattSats = 0.10;
let totalKostnad = antalMinuter * kostnadPerMinut;
console.log(totalKostnad);

// beräkna rabatt - 10 % om man ringer över 1000 kr
let rabatt = 0; 
if(totalKostnad >= 1000){  // större eller = 
    rabatt = totalKostnad * 0.10;
    // Beräkna ny total kostnad
    //totalKostnad = totalKostnad* (1- rabattSats); 
    totalKostnad = totalKostnad - rabatt; 

}                                    

// steg 3- programmet skall visa en alert(); Läsa ut
let reultat = "Din minutkostnad per månad är : " + totalKostnad;
resultat += "\n"
resultat += "Din rabatt är : " + rabatt;

alert(resultat); 







let myMinutes;
let myPrice;
myMinutes = prompt("Hur många minuter ringer du i snitt per månad?");
myPrice = prompt("Vad är din minutkostnad?");

// Steg 2: Beräkningar
// Beräkna total kostnad
let discountAmount = 0.10;
let totalCost = myMinutes * myPrice;
console.log(totalCost);

// Beräkna rabatt (10% om man har en kostand över 1000kr)
let discount = 0;
if(totalCost >= 1000){
   discount = totalCost * 0.10;
   // Beräkna ny total kostnad
   // Okej men lite mer komplicerad:  totalCost = totalCost * (1- discountAmount);
   totalCost = totalCost - discount;
}

// Steg 3: Visa resultatet
let myCost = "Din kostnad per månad är : " + totalCost;
myCost += "\n";
myCost += "Din rabatt är : " + discount;

alert(myCost); 
