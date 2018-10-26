/* På ett ma%eprov kunde man få högst 50 poäng.Gränsen för betyget E var 25 poäng och för betygen D, C, B och A
30, 35, 40 respekGve 45 poäng. Skriv e% program som läser in (via en prompt) poängen för en elev 
och som visar vilket betyg hon eller
han fick på provet */ 

let betyg = prompt ("Vad fick du för poäng?");
let resultat = "";
if ( betyg <25){
    resultat = "Du fick F";
}
if ( betyg >= 25 && betyg < 30){
    resultat = "Du fick E";
}
if ( betyg >= 30 && betyg < 35){
    resultat = "Du fick D";
}
if ( betyg >= 35 && betyg < 40){
    resultat = "Du fick C";
}
if ( betyg >= 40 && betyg < 45){
    resultat = "Du fick B";
}
if ( betyg >= 45 && betyg <= 50){
    resultat = "Du fick A";
}
else {
    resultat = ("Felaktig betygskala");
}

alert(resultat);