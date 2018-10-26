/*let yearlyMembership = prompt ("Priset för ett årskort?");
let ticket = prompt("Priset för en biljett?");
let visits = prompt("Antal besök per år?");

let myCost = ticket * visits;
let cost = " ";

if (myCost < yearlyMembership) {
    cost = "Du borde köpa engångsbiljetter"
}
else if(myCost > yearlyMembership ){
    cost = "Du borde köpa årskort"
}


alert(cost); */


/*let yearlyMembership = prompt ("Priset för ett årskort?");
let ticket = prompt("Priset för en biljett?");
let visits = prompt("Antal besök per år?");*/

let svar = prompt("Ange priset för ett årskort\noch priset för en biljett\noch antal besök per år. \Mata in i detta format:\nÅrstkort,Biljettpris,Antal?")
// vi får tillbaka en sträng
// t.ex "4000,100,20"
let svarArr = svar.split(",");
// här får vi tillbaks en array ["4000", "200", "20"]

if ((svarArr[1]*svarArr[2]) > svarArr[0]) {
    alert("Köp årskort")
}
else alert("Det lönar sig inte att köpa årskort");{
}
