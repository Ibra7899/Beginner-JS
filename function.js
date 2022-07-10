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
    sendsMessage("keli", total, breakDown)
}
calculateRent()
function sendsMessage(name, total, breakDown){
    console.log(breakDown);
    console.log(`Dear ${name} your rent for this month is ${total} as follows, garbage:${breakDown.garbage}, stima:${breakDown.stima}, water:${breakDown.water}, rent:${breakDown.rent} `);
}

