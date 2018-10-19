var nameF = "Frida Schoultz"; //Skapa variabeln "name" och i den skall det innehålla namnet "Frida Schoultz"

var id_for_name = document.getElementById('name'); /*Då html och denna javascript fil är kopplade, så kan vi
påverka element som finns i html filen via unika ID:n som tilldelats till olika element i HTML filen från 
denna javascrpit fil.
I vdetta fall har vi i html filen en DIV som har ID:t "name" och genom den kan vi nu ändra vad den
div:en skall innehålla. Och det gör vi genom att först få dess position genom att skriva koden:

var id_for_name = document.getElementById('name');

Vi skapar en variabel som heter "id_for_name" som kommer att innheålla positionen för elementet med
ID:t "name", och det får vi genom koden
document.getElementById('name')

Så nu har vi lagrat positionen för elementet vi vill ändra genom denna javascript fil.*/


id_for_name.textContent = nameF;

/* Sedan för att ändra innehållet av elementet med ID:n "name" så ersätter vi det genom att tilldela den
variabelns innehåll på variabeln som heter "nameF" som innehåller "Frida Schoultz"

På detta sätt har vi nu ersatt innehållet med ID:n "name" med det som finns i variabeln "nameF" */


