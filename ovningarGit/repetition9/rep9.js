// Lektion 9 -Övning 1

// skapa ett datum Objekt
let now = new Date ();
now = new Date ("2019-01-01");
console.log(now);

//Hämta år
let year = now.getFullYear();
console.log(year);

//hämta månad
let month = now.getMonth() + 1;

if (month<10){
    month = "0" + month; // sträng + number = sträng. Vi konkatinerar en  sträng ihop med month
}
console.log(month);

//Hämta dag
let day = now.getDate();
if(day<10) {
 day = "0" + day;
}
console.log(day);
//skapa en sträng i detta format YYYY-MM-DD
let today = year + "-" + month + "-" + day;
console.log(today);

// en bugg t.ex. 1/1 visas i detta format 2019-1-1

console.log(today);

// en sträng + number returnerar en sträng

// Använd toDateString  i detta format YYYY-MM-DD, and vänd inte metoderna getFullYear() och getMonth() och getDate()

// steg 1 - skapa ett datum objekt -- använd substring för att plocka ut stycken i en sträng
let idag = new Date();
let idagStr = idag.toDateString();
console.log(idagStr);

// Hämta år
let ar = idagStr.substring(11);
console.log(ar);

//Hämta dag från strängen "Fri Oct 26 2018"
let d = idagStr.substring(8,10);
// let d = idagStr.substr(8,2)
console.log(d);

//Hämta månad från strängen "Fri Oct 26 2018"
let m = idagStr.substring(4,7);
console.log(m);
switch (m){
    case "Jan" : m = "01"; break;
    case "Feb" : m = "02"; break;
    case "Mar" : m = "03"; break;
    case "Apr" : m = "04"; break;
    case "Maj" : m = "05"; break;
    case "Juni" : m = "06"; break;
    case "Juli" : m = "07"; break;
    case "Aug" : m = "08"; break;
    case "Sep" : m = "09"; break;
    case "Okt" : m = "10"; break;
    case "Nov" : m = "11"; break;
    case "Dec" : m = "12"; break;
}
console.log(m);
// skapa strängen
let result = ar + "-" + month + "-" + day;
console.log(result);

/* Visa aktuellt datum i detta format YYYY-MM-DD
t.ex 2018-10-26*/

//let datumobjekt = new Date();
//console.log(datumobjektString = datumobjekt.toLocaleDateString());
//console.log(datumobjekt.substring(0,10));
console.log(new Date().toLocaleDateString());

/* Visa klockan i detta format HH:MM:SS
t.ex. 14:05:10 Tips! Använd metoden toTimeString()*/ 

datum = new Date();
console.log(datum.toTimeString().substring(0,8));

/*Visa datum i detta format Dag den xx månad år
t.ex. Onsdag den 17 oktober 2018
Tips: Använd arrayer för att lagra veckodagar och månader. */

datum = new Date();
console.log(datum);
year = datum.getFullYear(); // 2018
month = datum.getMonth(); // 0-11
date = datum.getDate(); // 26
day = datum.getDay(); // 5 (0-6)
console.log(year, month, date, day);

let monthArray = [
    "Januari", 
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
]

let veckodagar = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
]


day = veckodagar[day];
month = monthArray[month];

result = day + " den " + date + " " + month + " " + year;


console.log(result);

// Skapa en live digital klocka och visa den i webbläsaren!

datum = new Date();
console.log(datum.toTimeString().substring(0,8));
