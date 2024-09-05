//declaring object literals
//const mySym= Symbol("key1")
/*const obj={
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
//obj.greeting= function() {
   // console.log("hello");
}
//obj.greetingtwo= function() {
    //console.log(`hello,${this.hobby}`);
}
//console.log(obj.greeting());
//console.log(obj.greetingtwo());*/

//2declaring objects using sinleton and non singleton(constructor)

//const tinderuser= new Object();//singleton
//console.log(tinderuser);
const tinderuser={}
tinderuser.email="palakbabber@gmail.com"
tinderuser.city="patiala"
tinderuser.loggedin="false"
 /*console.log(Object.values(tinderuser));
 //console.log(Object.entries(tinderuser));
 console.log(Object.keys(tinderuser));
 console.log(tinderuser.hasOwnProperty('loggedin'));*/
 const regularuser={
       city:"patiala",
         user:{
             fullname:{
               firstname:"palak",
                lastname:"babber"
                                }
              }
        }
        //console.log(regularuser.user.fullname); //here ? is for to tell us that the object is present here or  not in case it is not present
      
        //console.log(regularuser.user?.fullname);   
        const users = [
            {
                id: 1,
                email: "h@gmail.com"
            },
            {
                id: 1,
                email: "h@gmail.com"
            },
            {
                id: 1,
                email: "h@gmail.com"
            },
        ]
        
        users[1].email
        const course = {
            coursename: "js in hindi",
            price: "999",
            courseInstructor: "hitesh"
        }
        
        // course.courseInstructor
         const {courseInstructor} = course  //accesing method in case we don't use .dot method 
        
        const {courseInstructor: instructor} = course //here we are renaming the courseinstructor
        
        // console.log(courseInstructor);
        console.log(instructor);
        
        // {
        //     "name": "hitesh",          //here it is the json syntax we use in api ,it has resemblence to objects
        //     "coursename": "js in hindi",
        //     "price": "free"
        // }
        
        [
            {},          //it is in array form (api)
            {},
            {}
        ]             