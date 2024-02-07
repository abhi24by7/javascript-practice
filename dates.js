console.log(new Date (23456788765432).toString());
console.log(new Date());//current date and time

let dateNow=new Date();
console.log(dateNow.toString()); //2024-02-07T06:06:13.072Z
console.log(dateNow.toDateString()); //Mon Feb 07 2024
console.log(dateNow.toLocaleString()); //2/7/2024, 11:36:13 AM
console.log(dateNow.toTimeString()); //11:36:13 GMT+0530 (India Standard Time)
console.log(dateNow.toISOString()); //2024-02-07T06:06:13.072Z
console.log(dateNow.toUTCString()); //Mon, 07 Feb 2024 06:06:13 GMT
console.log(dateNow.toJSON()); //2024-02-07T06:06:13.072Z


console.log(typeof dateNow); //object

//creating custom date
// let myDate=new Date(2023, 0,23)
let myDate=new Date(2024, 0,23, 5,50,45,0)
//month is 0 based, so 0 is january, 1 is february...
//(year, month, day, hours, minutes, seconds, milliseconds)
//any can be skipped, it will be set to 0
console.log(myDate.toString());

let myDate1=new Date("2023-01-23")
//yyyy-mm-dd
//here month is 1 based so 1 is january, 2 is february...
console.log(myDate1.toLocaleString());


//-----------timestamp-----------------

let timestamp=Date.now(); 
//returns the number of milliseconds since 1970/01/01 00:00:00
console.log(timestamp);
console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000)); //in seconds
//math.floor is used to round off the number to the nearest integer

let newDate=new Date();
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth())//0 based
console.log(newDate.getHours())
console.log(newDate.getMinutes())
// iss tarah se date object se year, month, day, hours, 
// minutes, seconds, milliseconds, day of the week, 
// day of the month, day of the year, time zone, 
// etc. nikal sakte hain    
