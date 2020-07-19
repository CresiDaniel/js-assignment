const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript"
    },

}
//Way one
console.log(student.name);
console.log(student.projects.diceGame);
//Way two
const {name,age,projects:{diceGame}}=student;
console.log(name,age,diceGame);
