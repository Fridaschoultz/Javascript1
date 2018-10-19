// skapa ett objekt. referensen är car. egenskaper är name model weight color
let car ={
    // egenskaper
 name : "Fiat",
 model: "500" , 
 weight: "850kg",
 color : "white",

 //Metoder
 start: function() { console.log("start...")
},
 drive: function() { console.log("drive...")
},
 brake:function() { console.log("brake...")
},
 stop:function() { console.log("stop...")
},
    
}
console.log(car.name);
car.start();



