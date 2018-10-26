/*På ett matteprov kunde man få högst 50 poäng.
Gränsen för betyget E var 25 poäng och för betygen D, C, B och A
30, 35, 40 respektive 45 poäng. Skriv ett program som läser in (via
en prompt) poängen för en elev och som visar vilket betyg hon eller
han fick på provet.

Max = 50
gränser för betyg
a 45
b 40
c35
d 30
e 25
F<25
*/

// inmatning från prompt -- skriv in i en html fil
/*let poang = prompt("Ange antal betyg");

// beräkna 
let resultat = " ";

if (poang>=45) 
    betyg = "A";
else if (poang>=40);
    betyg = "B";
else if (poang>=35);
    betyg = "C";
else if (poang>=30);
    betyg = "D";
else if (poang>=25);
    betyg = "E";
else
    betyg ="F";

// visa betyg
    alert(resultat);*/





    // lösning med en switch
    let poang = prompt("Ange antal poäng");
    switch (true) {
        case (poang>=45): betyg = "A"; break;
        case (poang>=40): betyg = "B"; break;
        case (poang>=35): betyg = "C"; break;
        case (poang>=30): betyg = "D"; break;
        case (poang>=25): betyg = "E"; break;
        case (poang<25):  betyg = "F"; break;
        
    }
    alert("Poängen är " + betyg);

 

   