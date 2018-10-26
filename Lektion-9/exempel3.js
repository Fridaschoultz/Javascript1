//arbeta med datum och tid  i JS
// skapa en instans av Objektet Date

let today = new Date();
console.log(today);

console.log(today.getFullYear()); // 2018
console.log(today.getMonth()); // 9 =oktober .OBS 0-11 i månader
console.log(today.getDay()); // 3 = onsdag  ..söndag är = 0
console.log(today.getDate()); // datum 17 oktober

console.log("Klockan");


console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

//console.log(today.getMilliseconds());


console.log(today.toDateString());


console.log(today.toTimeString());  
console.log(today);