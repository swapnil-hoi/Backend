//global scope can be accessed outside
//local scope can only be accessed within the function


// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     //local scope cannot be accessed outside

// }

// //console.log(a);
// //console.log(b);
// console.log(c);


function one(){
    const username = "Hitesh"


    function two(){
        const website = "youtube"
        console.log(username);
        

    }

    //console.log(website);

    two()
    

}

//one()


if(true){

    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = "youtube"
        console.log(username + website);
        
    }

    //console.log(website);
    
}
//console.log(username);

console.log(addone(5))
function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5)