console.log("Hey!!!");
var num=prompt("Enter the number");
let oddeven=function(){
    if ( num % 2 == 0) {
        return ('Even Number');
    }else{
       return ('Odd Number');
    }
}
let result=oddeven();
console.log(`The number entered is ${num} and the Number is a ${result}`);