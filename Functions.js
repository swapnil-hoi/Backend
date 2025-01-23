function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//   return number1 + number2
    
// }

// const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){

//         console.log("Please enter a username");
        

//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"));

// console.log(loginUserMessage());


// function calculateCartPrice(val1, val2, ...num1){
//     return num1

// }

// console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {

    username: "Hitesh",
    price: 199,

}

function handleobject(anyobject){

    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);

    
}

handleobject({
    username: "Hitesh",
    price: 199,
})


const MyNewArray = [200, 400, 300, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(MyNewArray));

