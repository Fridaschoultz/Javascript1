// arbeta med inbyggda globala js-objekt
//Objekt String
let firstName = "Mahmud";
console.log(typeof firstName); // typen är string

let antal = firstName.length;

// Konverterar till gemener. små bokstäver
// OBS! Vi måste lagra resultatet
console.log(antal); // 6
firstName = firstName.toLowerCase();
console.log(firstName);

// OBS! Vi måste lagra resultatet. stora bokstäver
firstName = firstName.toUpperCase();
console.log(firstName);

// Konkatenering
let lastName = " Al Hakim";
//firstName.concat(lastName);
let fullName = firstName.concat(" " + lastName);
//OBS! Vi måste lagra firstName för att kunna visa hela namnet
console.log(fullName);

// substring -- anger vi start och slut
console.log(fullName.substring(0,6));
console.log(fullName.substring(7));
//Leta efter första mellanslaget
let space = fullName.indexOf(" ");
console.log(space);
console.log(fullName.substring(space+1));

// substr() - anger start och antal tecken framåt. 
//"Mahmud Al Hakim" -- hämtar mellannamnet
fullName.substr(7,2);
console.log(fullName.substr(7,2)); // Al
console.log(fullName[0]); // skirver ut m. skirver ut sista tecknet i namnet
console.log(fullName[fullName.length-1]); // använder dels en egenskape och dels en metod.  Ej en sträng men vi kan hantera den som i en arreyer

// Strängar indexeras som på samma sätt som i arrayer. Indexering med []
let arrTest = [1,2,3];
console.log(arrTest.length);
//skriver ut det sista elementet i elemenentn
console.log(arrTest[arrTest.lenght-1]);

let newName = "kalle Anka "
console.log(newName.indexOf(" ")); // 5
console.log(newName.lastIndexOf(" ")); // 10 för att efter anka så är det mellanslag

console.log(fullName); //MAHMUD al Hakim
console.log (newName.charAt(1)); // Visar A

// Metoden split()
let nameArray = fullName.split();
console.log(nameArray); // skriver ut hela strängen i en array
nameArray = fullName.split(""); //obs en tom sträng
console.log(nameArray);  // ger 'M', "A", ...osv
nameArray = fullName.split(" "); // OBS mellanslag i parentesen
console.log(nameArray); // ger "MAHMUD", "AL", "HAKIM"
fullName = "Mahmud;Al;Hakim";
nameArray = fullName.split(" ; ");  // [ 'MAHMUD', '', 'Al', 'Hakim' ]


fullName = " Mahmud Al Hakim ";
fullName = fullName.trim();
nameArray = fullName.split(" "); 
//chaining. En sats istället för två föregående satser 
nameArray = fullName.trim().split(" "); 
console.log(nameArray);

fullName = "Mahmud;Al,Hakim";
// byt ut ; mot mellanslag, bara det första förekomsten av ;
fullName.replace(";"," ");
console.log(fullName);


// Escape tecken
// n new line
// \" För att visa " i en sträng
// // \`` För att visa ` i en sträng
console.log("Hej\nVälkommen till JS. \n\n Idag har vi jobbat med string");
console.log("hej och välkommen till JS");




 