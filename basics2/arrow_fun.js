// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);  //this point to current context(here object)
//         console.log(this);
//     }

// }

//  user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//const chai =  () => {            //arrow function
  //  let username = "hitesh"
    //console.log(this);
//}


// chai()

 //const addTwo = (num1, num2) => {        //arrow function expicityly return
 //    return num1 + num2
// }
 

// const addTwo = (num1, num2) =>  num1 + num2          

// const addTwo = (num1, num2) => ( num1 + num2 )                 //arrow function implicitly call

//const addTwo = (num1, num2) => ({username: "hitesh"})           //arrow function returning object by implicitly method


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
//**************IIFE(IMIDIATETLY INVOKED FUNCTION EXPRESSION)************************
 //we need this so
( function palak()
{
    console.log('palak');
    
})();
( (a,b)=> {
    console.log(a+b);
    
    
})(3,4)
