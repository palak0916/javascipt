//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){        //child can access parent but parent cannot access child
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
  //explaining scope briefly here
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//method to declare function in two types

console.log(addone(5))

function addone(num){
    return num + 1
}

                                   //mini hostingy
  
addTwo(5)   
                   //here if i call the function here it will not execute as we are storing it in variable ,so here the variable is not known 
        //function expression
    const addTwo = function(num){
    return num + 2
}