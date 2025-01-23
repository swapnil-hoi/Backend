let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); 

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getUTCDate())

