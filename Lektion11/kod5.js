/*let data = [
    {name:'Frida', email:'fridaschoultz@email.com'},
    {name:'Isabelle' , email:'isabelleschoult@email.com'},
    {name:'Olivia' , email:'oliviaschoultz@email.com'},
    {name:"Lena", email:"lenaschoultz@hotmail.com"}
    ];  //name och email är objekt inne i en array

    //console.log(data[i]); // skriver ut alla objektet
    for (let i = 0; i < data.length; i++) {
    console.log(data[i].name); // skriver ut name i objektet
    }

    let data = [
        {name:'Frida', email:'fridaschoultz@email.com'},
        {name:'Isabelle' , email:'isabelleschoult@email.com'},
        {name:'Olivia' , email:'oliviaschoultz@email.com'},
        {name:"Lena", email:"lenaschoultz@hotmail.com"}
        ];  //name och email är objekt inne i en array

        for(let i in data) {
            console.log(i + ":" + data[i].name)
        }  // in- hämtar indexet*/


        let data = [
            {name:'Frida', email:'fridaschoultz@email.com'},
            {name:'Isabelle' , email:'isabelleschoult@email.com'},
            {name:'Olivia' , email:'oliviaschoultz@email.com'},
            {name:"Lena", email:"lenaschoultz@hotmail.com"}
            ];  //name och email är objekt inne i en array 

            

for(let obj of data){
    console.log(obj.name);
}  // skriver ut hela objektet, hela elementet