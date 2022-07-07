// creating Element 
var addition = document.getElementById("addition");
var hFive = document.createElement("h5");
addition.appendChild(hFive);

//  addition calculator 
document.getElementById("btn1").onclick = function(){


    var addOne = document.getElementById("addOne").value;
    var addTwo = document.getElementById("addTwo").value;

    var hone = parseInt(addOne);
    var htwo = parseInt(addTwo);

    var result = hone + htwo ;

    hFive.innerText = result;
}

// creating Element 
var substraction = document.getElementById("substraction");
var $Five = document.createElement("h5");
substraction.appendChild($Five);

// substraction calculator 
document.getElementById("btn2").onclick = function(){

    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;

    var hthree = parseInt(sub1);
    var hfour = parseInt(sub2);

    var total = hthree - hfour;

    $Five.innerText = total;    
}

// create Element 
var division = document.getElementById("division");
var five = document.createElement("h5");
division.appendChild(five);

// division calculator 
document.getElementById("btn3").onclick = function(){

    var div1 = document.getElementById("div1").value;
    var div2 = document.getElementById("div2").value;

    var hfive = parseInt(div1);
    var hsix = parseInt(div2);

    var yote = hfive / hsix;

    five.innerText = yote;
}

// creating element 
var multplication = document.querySelector("#multplication");
var $_five = document.createElement("h5");
multplication.appendChild($_five);

// multplication calculator 
document.querySelector("#btn4").onclick = function(){

    // get data from inputs
    var mult1 = document.querySelector("#mult1").value;
    var mult2 = document.querySelector('#mult2').value;
    // converting into integers
    var mult$1 = parseInt(mult1);
    var mult$2 = parseInt(mult2);
    // multiply
    var multiply = mult$1 * mult$2 ;

    $_five.innerText = multiply;
}

// form input 
document.getElementById("submit").onclick = function(){

    var firstName = document.getElementById("name1").value;
    var secondName = document.getElementById("name2").value;
    var allNames = firstName +" "+secondName;

    document.getElementById("names").innerText = allNames;
}