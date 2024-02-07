const score=100;
console.log(score);

const balance=new Number(20)
console.log(balance);
console.log(typeof balance)
console.log(balance.valueOf());
console.log(balance.toString().length);


console.log( balance.toFixed(3)); 
//returns a string representation of the number with a fixed number of decimal places
//20.000
console.log( typeof balance.toFixed(3));


const num=2000.126456789
console.log(num.toPrecision(6)); //digits before decimal are also counted
//2000.13
console.log(num.toPrecision(3));
// if parameter is less than number of digits before decimal
// then it will return in exponential form
// 2.00e+3

const num1=10000000
console.log(num1.toLocaleString());
//converts a number into a string, using a local specific format
//10,000,000


//******************************* MATH ************************************* */
console.log(Math.round(6.77));
//returns the value of a number rounded to the nearest integer
console.log(Math.PI);
//returns the value of PI 

console.log(Math.random());
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive) always
//this can be used to generate random numbers between a range by multiplying 
//it with the range

console.log(Math.random()*100);
//random number between 0 and 100
//can be used to get random integers by converting to integer using Math.round
console.log(Math.round(Math.random()*100));

//to get numbers between a range

const min=10
const max=20
//**imp**
console.log(Math.floor(Math.random()*(max-min+1)) + min)