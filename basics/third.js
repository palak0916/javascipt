//const myArr=[1,2,3,4,5]
//console.log(myArr[0])
// Array methods

 //myArr.push(6)
// myArr.push(7)
// myArr.pop()

 //myArr.unshift(9)
 //myArr.shift()

//console.log(myArr.includes(3));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join()

 //console.log(myArr);
//console.log( newArr);
//console.log( typeof newArr);


// slice, splice
//console.log("A ", myArr);

//const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B ", myArr);


//const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);
//console.log(myn2);


const myarr=["palak","hema","sumi","dev"]
const hero=["aa","gg","cc","dd"]
//myarr.push(hero)
//console.log(myarr);
//const newarr=myarr.concat(hero)
//console.log(newarr);
//const newspread=[...hero,...myarr]
//console.log(newspread);
const anotherarray=[1,2,3,[4,5,6],7,8,[9,12,[10,11],13]]
const oneIntoAnother=anotherarray.flat(Infinity)
console.log(oneIntoAnother);
/*(const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);*/
console.log(Array.isArray("palak"));
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




