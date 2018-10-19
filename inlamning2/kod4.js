 var hiss = {
        plan: 1, // Egenskap

        f: function goTo(a) { /* egenskapen f innehåller metoden goTo, 
                               som tar emot en parameter "a" */
            this.plan = a; /* I objektet hiss ändrar vi egenskapen plan och
                            och ersätter dess värde med innehållet
                            av en parameter "a. Vi använde oss av "this" för 
                            att referrera till "denna" variabel ""plan"
                            som existerar i objektet hiss.*/ 
            return "Hissen åker till plan " + a;  /* Sedan returnerar vi en 
                                                text och variabeln "a" till
                                                anropet av denna metod*/ 
        },
            
        h: function where(){ /*Egenskapen h innehåller metoden where
                            som inte tar emot någon parameter*/ 
                                                                          
            return "Hissen är på plan " + this.plan + " just nu "; /*Sedan returnerar vi innehållet av egenskapen "plan"
                               till anropet av denna metod med text och this.plan som pekar på det aktuella objektet. */ 
        }
 };
 console.log(hiss.f(5)); /* Här visar vi en text i konsolen som anropar metoden
                         som finns i egenskapen "f" som tillhör objektet "hiss". I
                         anropet skickar vi numret "5" till metoden, och 5:an tas 
                         emot av metoden, sedan returnerar metoden något till
                         tillbaka som visas upp i konsolen*/ 
 console.log (hiss.h()); /* Här skickas inget till anropet då metoden inte har någon parameter,
                         den bara kör satserna i funktionen den anropat */
                         

/* anropt av metod = kör alla satser som finns i en metod som anropats
 t.ex. hiss.f(5); */
/*anrop av metod, som även skickar parameter/parametrar = som ovan, fast metoden tar 
även emot ett värde som kommer att användas på något sätt av satserna i metoden som den anropats till
t.ex.  hiss.h() */




 

 

