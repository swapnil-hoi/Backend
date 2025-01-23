// const user = {

//     username: "Hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }

// }

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

const chai  = () => {
    let username = "Hitesh"
    console.log(this);
    
}

const addTwo = (num1, num2) => num1 + num2


console.log(addTwo(3, 4));
