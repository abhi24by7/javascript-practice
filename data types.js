const insideTemp=null
let userEmail //isme default undefined hota hai

const id=Symbol("123")
const id2=Symbol("123")

// console.log(id===id2) //false kyu ki ye dono alag alag memory me store honge

const arr=[1,2,3,4,5]
const arrStr=["one","two","three","four","five"]


//aise object bhi bana sakte hai
let obj = {
   name: "abhi",
   age: 22,
}
// console.log(obj.name);

const myFunc = function(){
    console.log("this is my function");
}



// myFunc();


//object bana sakte hai
let user1={
name:"abhi",
email:"abhi@gmail.com",
}

console.log(user1.name);

let user2=user1;

user2.name="sachin";
//user2 ko change krne se user1 bhi change ho jayega because user2 and user1 dono same memory ko point kr rahe hai
console.log(user1.name);
console.log(user2.name);