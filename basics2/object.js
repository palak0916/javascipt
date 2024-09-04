//declaring object literals
const mySym= Symbol("key1")
const obj={
    name:"palak",
    city:"patiala",
    hobby:"dance",
    [mySym]:"mykeys",
    "myname":"palki"

}
//console.log(obj.city);
//console.log(obj["city"]);
//console.log(obj["myname"]);
//console.log( obj[mySym]);
//obj.name="naira"
//Object.freeze(obj)
//obj.city="palki"
//console.log(obj);
obj.greeting= function() {
    console.log("hello");
}
obj.greetingtwo= function() {
    console.log(`hello,${this.hobby}`);
}
console.log(obj.greeting());
console.log(obj.greetingtwo());



