

// Functions 

var jina = "ismail";
var identity = {
    name:"ibra",
    age:25,
    weight:40,
    country:"kenyan"
}

names()
function names(){

    console.log(jina);
    console.log(jina);
    console.log(identity);
}

// How tp pass parameters inside a function 

function adds(num1, num2, num3){
    console.log(num1, num2, num3);
    console.log(num1 + num2 + num3);
}
adds(40, 50, 30)

function multiply(num1, num2, num3){
    console.log(num1, num2, num3);
    console.log(num1 - num2 - num3);
}
multiply(100, 30, 30)

function jinaYako(yako){
    console.log(yako);
}
jinaYako("ibrahim");

//  call back function 
function calculateRent() {
    var garbage = 300;
    var stima = 500;
    var water = 1000;
    var rent = 7000;

    var breakDown = {garbage, stima, water, rent}

    var total = garbage + stima + water + rent;
    sendsMessage("musa", total, breakDown)
}
calculateRent()
function sendsMessage(name, total, breakDown){
    console.log(breakDown);
    console.log(`Dear ${name} your rent for this month is ${total} as follows, garbage:${breakDown.garbage}, stima:${breakDown.stima}, water:${breakDown.water}, rent:${breakDown.rent} `);
}

// Switch Statement 
var brand = "Toyot";
switch (brand) {
    case 'Toyota':
        console.log(brand);
    break;
    case 'Toyot':
        console.log(brand);
    break;
    case 'Toyo':
        console.log(brand);
    break;
    case 'to':
        console.log(brand);
    break;
    default:
        console.log('Check the sentence case');             
}

var laptop = "le";
switch(laptop){
    case 'lenovo':
        console.log(laptop);
    break;
    case 'lenov':
        console.log(laptop);
    break;
    case 'len':
        console.log(laptop);
    break;
    default:
        console.log("Check the sentence Case");        
}

// Time Interval 
// You can use clear interval to prevent it from happening 

// var interval = setInterval(()=>{
//     alert("Hello World")
// },5000)
// clearInterval(interval);

// var image = document.querySelector("img").style;
// image.height = "300px";
// image.objectFit = "cover";
// var text = document.querySelector("h1").style;
// text.display = "none";


// var timeout = setTimeout(()=>{
//     image.display = "none";
//     text.display = "block";
// },5000)
// clearInterval(timeout);

// Equilateral = All sides are equal;
// Isoceles = two sides are equal;
// Scalene = no sides are equal ;

document.getElementById("click").onclick = function(){

    var tri$1 = document.getElementById("trione").value;
    var tri$2 = document.getElementById("tritwo").value;
    var tri$3 = document.getElementById("trithree").value;
    
    if(tri$1 === tri$2 && tri$2 === tri$3 && tri$1 === tri$3){
        
        document.getElementById("triangles").innerHTML = "Equilateral";
    }else if(tri$1 === tri$2 || tri$2 === tri$3 || tri$1 === tri$3){

        document.getElementById("triangles").innerHTML = "Isoceles";
    }else if (tri$1 != tri$2 && tri$2 != tri$3 && tri$1 != tri$3){

        document.getElementById("triangles").innerHTML = "Scalene";
    }
}

// DATE OBJECT 
var newDate = new Date();
console.log(newDate);

// Get YEAR 
var year = newDate.getFullYear();
console.log("We are in the year" +" "+ year);

// GET MONTH= Javascript Calculates the months from zero 
var month = newDate.getMonth();
console.log("We are in the month july"+" "+month);

// Get DAY
var day = newDate.getDay();
console.log("day" +" "+day);

// GET DATE 
var date = newDate.getDate();
console.log("Date"+" "+ date+" "+ "of july");

// GET HOUR 
var hour = newDate.getHours();
console.log(hour+""+"th"+" "+"hour");

// GET MINUTE; 
var minute = newDate.getMinutes();
console.log("minute"+" "+ minute+""+"min");

// GET SECOND 
var second = newDate.getSeconds();
console.log(second+"sec");

// GET MILLISECOND 
var millisecond = newDate.getMilliseconds();
console.log( "This is a"+" "+ millisecond);


var day = newDate.getDay();
switch (day) {
    case 4:
        console.log("Today is on thursday");
    break;
    case 1:
        console.log("Today is monday");
    break;
    case 6:
        console.log("Today is Saturady");
    break;
    case 5:
        console.log("Today is Friday");
    break;            
    }

 var month = newDate.getMonth();
 switch(month){
    case 1:
        console.log("We are in February");
    break;
    case 4:
        console.log("We are in may");
    break;
    case 6:
        console.log("We are in July");
    break;
 }   

//  MATH FUNCTION 
// Math.round = it rounds off a number above 5  
var num2 = 6 / 4;
console.log(num2);
console.log(Math.round(num2));

// Math.ceil = it rounds off a number either be it below 5 or above 5
var num3 = 9 / 7;
console.log(num3);
console.log(Math.ceil(num3));

// math.trunc = it removes the decimal
var num4 = 5 / 4;
console.log(num4);
console.log(Math.trunc(num4));

// Math.sign = Only Checks for the sign irrespective to whatever is written 
console.log(Math.sign(45));
console.log(Math.sign(-45));

// Math.floor acts the same as Math.sign 
console.log(Math.floor(48.233999));

// Math.random = to generate number 
console.log("Between 0 to 10");
var random = Math.random()*10; // generates number between 0 to 10
var roundOff = Math.floor(random);
console.log(roundOff);

console.log(Math.random()*10); // generates number between 0 to 10
console.log(Math.random()*10); // generates number between 0 to 10
console.log(Math.random()*10); // generates number between 0 to 10
console.log("Between 0 to 1");
console.log(Math.random()) // generates a number between 0 to 1
console.log(Math.random()) // generates a number between 0 to 1
console.log(Math.random()) // generates a number between 0 to 1
console.log(Math.random()) // generates a number between 0 to 1

console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));

// Type off 
console.log(typeof  "Naima");
console.log(typeof 4);
