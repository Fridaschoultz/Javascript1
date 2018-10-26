// Ternary-operatorn ? :
// Villkor ? pm sant : Om falskt


function getFee(isMember) {
    return (isMember ? "20kr" : "100kr");
    
    function getFeeVersion2(isMember){
        if(isMember){
            return "20kr";
        }
        else{
            return "100kr";
        }
     }
     
// samma men utan klamrar
    function getFeeeVersion2(isMember){
        if(isMemeber)
        return "20kr";
        else
        return "200kr";

    }


}


//Truthy och falsey
// följande värden är lltid falska i JS
// 0
// null
// NaN
// false
// ""
// ``
// undefined

if (false || 0 || null || NaN || undefined || `` || "" ) {
    console.log("Vi kommer aldrig hit!");
}

let x = "";
if (x === ``){  // detta är sant
   console.log("x är en tom sträng");
}

/*if(!Nan) {
    console.log("Test på !Nan");
}*/

// Switch -satsen
 function getDay() {
     
    let day;
     let today = new Date().getDay();
        switch (today){
            case 0: day = "Söndag"; break;
            case 1: day = "Måndag"; break;
            case 2: day = "Tisdag"; break;
            case 3: day = "Onsdag"; break;
            case 4: day = "Torsdag"; break;
            case 5: day = "Fredag"; break;
            case 6: day = "Lördag"; break;
        }
    return day;
    }

    console.log("Det är " + getDay().toLowerCase() + " idag!")
