const name="abhinav"
const repo=14

// console.log(name+repo+ " value");
//this is string concatenation another way to do this is using template literals
console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const game=new String('cricket')
// ye karne pe game ka type object ho jayega orr iska value bhi cricket ho jayega
console.log(game)

console.log(game[1]);
console.log(game.__proto__);
//isse game ka prototype object mil jayega


console.log(game.toUpperCase());
console.log(game.charAt(5));
console.log(game.indexOf('c'));


console.log(game.substring(1,4));
//index 1 se 4(excluded)=3 tak ka string print hoga

console.log(game.slice(2, 5));

const newname="   abhinav   "
console.log(newname);
console.log(newname.trim());

const url="https://www.google.com/search?q=javascript%20string%20methods";

console.log(url.split('/'));
console.log(url.split(''));

console.log(url.split('?'));
console.log(url.split('='));
console.log(url.split('%20'));

console.log(url.replace('%20', '-'));



const newUrl = url.replace('https', 'http');
console.log(newUrl);
//http://www.google.com/search?q=javascript%20string%20methods

console.log(url.includes('java'))
//true


//suppose you wanna split a string (eg url) into different parts based on a seperator

const url1='abhinav-kumar-singh'
console.log(url1.split('-'))        
//[ 'abhinav', 'kumar', 'singh' ]
//this will return an array of strings based on the seperator


