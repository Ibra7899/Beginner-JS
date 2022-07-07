//(use strict mode defines that javascript code should be executed in "strict mode")
// "use strict"

// alert("hello")


// styling with javascript by class and id

// document.getElementById("mydiv").style.backgroundColor = "red";
document.getElementById("mydiv").style.padding = "20px";
document.getElementById("mydiv").style.margin = "10px";
document.querySelector("#mydiv").style.backgroundColor = "red";

document.querySelector(".para").style.color = "green";
document.querySelector(".para").style.padding = "30px";

// for ways to declare javascript variables
// 1=var , 2=let, 3=const

// variables 
var myName = "ibrahim";
console.log(myName);

var myName = "abdikadir";
console.log(myName);

var myName = "keli";
console.log(myName);

let mySchool = "moringa";
console.log(mySchool);

// let mySchool = "nairobi";
// console.log(mySchool);

const School = "moringa";
console.log(School);

myTown = "ngara";   //declaring variables by using nothing
console.log(myTown); //but it won't work if you introduce a keyword "use strict"

// data types 
// string 
var Name = myName +" "+ "is a boy";
console.log(Name);

var Name = `${myName} is a boy`;
console.log(Name);

// Arithmetic Operators

var a = 10;
var b = 43;
var c = b % a;
console.log(c); 

// DOM 
document.getElementById("para").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia!";
document.getElementById("heading").innerHTML = "Introduction to Javascript";

// How to Create Element Using Javascript 

var myDiv = document.getElementById("mydiv");
var myHfive = document.createElement("h5");
myDiv.append(myHfive);
myHfive.innerHTML = "my progress is fine";

// 6/july/2022 
// string 

// length 
var myString = "am learning javascript";
console.log(myString.length);

// converting string to uppercase and lowercase 
var toUpperCase = myString.toUpperCase()
console.log(toUpperCase);

var car = "THIS IS MY CAR";
console.log(car.toLowerCase());

// slice method 
var slicing = "cascading style sheet".slice(5,10);
console.log(slicing);

// substring (similar to slice function)
var substring = "cascading style sheet".substring(3);
console.log(substring);

// trim 
var trim = "     ibrahim ";
console.log(trim.trim());

// includes (checks whether the string contains something)
var include = "mohamed"
console.log(include.includes(''));

// split 
var split = include +"!"+ "is learning javascript";
console.log(split.split("!"));

// 7/july/2022
// objects
var person = {
    name:"ibrahim", 
    age:21,
    nationality: "kenyan",
    height:5.5,
    race:"black",
    saysHello(){
        console.log("Good Morning Kenya");
        console.log(this);
    }

} 
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.nationality);
console.log(person.saysHello());
console.log(this)

// Arrays 
var newArray = [];
console.log(newArray);

      // array of string 
var stringArray = ['abdi', 'ibra', 'ismail']
console.log(stringArray);


      // array of Objects 
var objectArray = [
    {name:'oska', age:50, height:2.5},
    {name:'manka', age:30, height:3.5}
]
console.log(objectArray);

      // array of arrays 
var array = [['issa','yusra','40'],['30']]
console.log(array[0][2]);

// array methods 
// 1 = push = is used to push data into an empty array
newArray.push(stringArray, array, objectArray);  
console.log(newArray);

var emptyArray = []
console.log(emptyArray);
emptyArray.push('asha',
             {name:'kasida', age:30, country:'kenya'},
             function(){},
             ['suadha'],
             [['30','25'],['zeitun', 'maryam']],
             [{name:'mulki', age:30, height:3.5}]
)
console.log(emptyArray);
emptyArray.push('ibrahim')
console.log(emptyArray);

// 2 = pop = removes data from the last index of an array 
stringArray.pop()
console.log(stringArray);

emptyArray.pop()
console.log(emptyArray);

// 3 = shift = removes data from the first index of an array 
emptyArray.shift()
console.log(emptyArray);

// 4 = unshift = add data in the first index of an array 
emptyArray.unshift('asha',[{name:'mulki', age:30, height:3.5}])
console.log(emptyArray);