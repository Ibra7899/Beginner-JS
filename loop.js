// 3rd page of learning javascript 

// // alert("heyy");

// var checkout = "ibrahim";
// var car = "mazda"
// var car$2 = "Demio";
// var all = car + car$2


// // console.log(this);
// // Normal Function 
// function name(){
//     console.log("this is a normal function!!!!");
// }
// name();

// // Arrow function 
// user = () =>{
//     console.log("this is a arrow function");
//     console.log(this.car);
// }
// user();

// toyota = () => {
//     console.log(this.checkout);
// }
// toyota();

// // High Order Functions 

// // FOR EACH 
// var countries = ['musa', 'abdi', 'said', 'hamac', 'meysun'];
// // console.log(countries[0]);
// // console.log(countries[1]);
// // console.log(countries[2]);
// // console.log(countries[3]);
// // console.log(countries[4]);

// // we can loop through each index by using for each 

// console.log(countries.length);

// countries.forEach((country) => {
//     console.log(country);
// })

// // AN ARRAY OF OBJECTS 
// var people = [
//     {name:"musa", age:22, id:1, nationality:"kenyan"},
//     {name:"hamac", age:18, id:3, nationality:"uganda"},
//     {name:"keli", age:25, id:4, nationality:"tanzania"}
// ]

// console.log(people);

// people.forEach((person)=>{
//     console.log(person);
// })

// // AN ARRAY OF INSIDE ANOTHER ARRAY = To get individual you must loop it through twice
// // by using forEach Keyword 
// var cars = [
//     [{toyota:1000},{prado:4000}],
//     [{Honda:1500},{fit:3000}],
//     [{nissan:2000},{serena:5000}]
// ]
// console.log(cars);

// cars.forEach((type)=>{
//     type.forEach((cars)=>{
//         console.log(cars);
//     })
// });

// /*<=========MAP==========>*/
// var people = [
//     {name:"musa", age:22, id:1, nationality:"kenyan"},
//     {name:"hamac", age:18, id:3, nationality:"uganda"},
//     {name:"keli", age:25, id:4, nationality:"tanzania"}
// ]

// var users = people.map((person) => {
//     return person.name+":"+" "+ person.age;
// });
// console.log(users);

// var cities = countries.map((country) => {
//     return country;
// })
// console.log(cities);

// /*<=========Filter========>*/

// var filtered = people.filter((person)=>{
//     return person.name.endsWith("a")
//     return person.name.startsWith("k")
//     return person.id == 1;
//     return person.id !== 1;
// });
// // console.log(filtered);

// var filtered = countries.filter((country)=>{
//     return country.startsWith("m")
// })
// // console.log(filtered);

// /*<============REDUCE===================>*/
// var numbers = [30, 23, 48, 59, 33, 49, 30, 20, 18, 40]

// var total = numbers.reduce((total, acc)=>{
//     console.log(total, acc);
//     return total+acc;
// })
// // console.log(total);

// var ages = [20, 30, 40, 50, 60, 5, 8, 9, 10]

// var total = ages.reduce((total, acc) =>{
//     console.log(total, acc);
//     return total + acc;
// })
// // console.log(total);

// /*<=================Sort======================>*/
// var ages = [20, 30, 40, 50, 60, 5, 8, 9, 10];

// var sortages = ages.sort((a,b)=>{
//     return b-a;  // sorting in descending order
// })
// // console.log(sortages);

// var numbers = [30, 23, 48, 59, 33, 49, 30, 20, 18, 40]
// var sortnumbers = numbers.sort((a,b)=>{
//     return a-b; // sorting in ascending order
// })
// // console.log(numbers);

// /*<===============Find=================>*/
// var people = [
//     {name:"musa", age:22, id:1, nationality:"kenyan"},
//     {name:"hamac", age:18, id:3, nationality:"uganda"},
//     {name:"keli", age:25, id:4, nationality:"tanzania"}
// ]

// var finding = people.find((person)=>{
//     return person.name.startsWith("k");
// })
// // console.log(finding); // similar to the method of filter.

// var filtering = people.filter((person)=>{
//     return person.name.startsWith("k")
// })
// // console.log(filtering);

// // ES6 JAVASCRIPT;

// //DESTRUCTURING 

// var person = {
//     name:"ibra",
//     age:40,
//     nationality:"kenyan",
//     race:"black",
//     height:2
// }
// // console.log(person.name, person.age, person.nationality, person.race, person.height);

// var {name, age, nationality, race, height} = person;
// // console.log(person);

// var cars = {
//     toyota:"prado",
//     price1:1000,
//     nissan:"serena",
//     price2:2000,
//     honda:"fit",
//     price3:3000
// }
// // console.log(cars.toyota, cars.price1, cars.nissan, cars.price2, cars.honda, cars.price3);

// var {toyota,price1,nissan,price2,honda,price3} = cars;
// console.log(cars);

// //SPREAD OPERATOR 
// var people = [
//     {name:"musa", age:22, id:1, nationality:"kenyan"},
//     {name:"hamac", age:18, id:3, nationality:"uganda"},
//     {name:"keli", age:25, id:4, nationality:"tanzania"}
// ]
// // console.log(...people);


// //RETURN OPERATOR 
// var newPeople = [...people]
// console.log(newPeople);


// ApIs 
// 25th/ july / 2022 

// FETCH 
// var url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// // ASYNCHRONOUS FUNCTION 

// var url = "https://jsonplaceholder.typicode.com/users";
// async function fetchdat(){
//     try {
//         var response = await fetch(url);
//         var data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// var url = "https://jsonplaceholder.typicode.com/posts"

// var fetchdata = async ()=>{
//     try {
        
//         var response = await fetch(url);
//         var data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchdata();

// // AXIOS METHOD
// var url = "https://jsonplaceholder.typicode.com/posts"

// var getData = async ()=>{
//     try {
        
//         var response = await axios(url);
//         var data = await response.data;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();

// async function fetchdata (){
//     try {
        
//         var response = await axios(url);
//         var data = await response.data;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchdata()

// var url = "https://jsonplaceholder.typicode.com/users";
//  var fetchData = async ()=>{
//     try {
        
//         var response = await axios(url);
//         var data = await response.data;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
//  }
//  fetchData();

// POST 
var url = "https://jsonplaceholder.typicode.com/users";
var postData = async ()=>{
    try {
        
        var data = await axios.post(url, {
            id:11,
            name:"ibra",
            address:"ngara 13234",
            email:"ibra@gmail.com"
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// postData()

var url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)

async function post(){
    axios.post(url,
        {
            name:"musa",
            id:30,
            race:"black",
            address:"thika356",
            email:"musa@gmail.com"
        }
    ).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}
post()