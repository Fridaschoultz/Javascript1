
console.log("Dagens datum: ");
let datum = new Date () 
let year= datum.getFullYear();
let month = datum.getMonth() +1;
let date = datum.getDate();


console.log(year + "-" + month +"-" + date);


console.log("*********************************");

/*console.log("Aktuell tid: ");
let tid = new Date()
let hour = tid.getHours();
let min = tid.getMinutes();
let sek = tid.getSeconds();

console.log(hour + "-" + min + "-" + sek);*/  // utan toTimeString

console.log("Aktuella tiden ");

let tid = new Date();
console.log(tid.toTimeString());










