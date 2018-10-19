let kurs = {

    name : "Javascript1",
    teacher: "Mahmud Al Hakim",
    school: "Nackademin",
    weeks: "7",
    period: "2018",

    printInfo:function(){
        console.log("Jag studerar " + this.name + " på " + this.school + " i " + this.weeks + " veckor!")
    }
}
console.log(kurs);
kurs.printInfo();
