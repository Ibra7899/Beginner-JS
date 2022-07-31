// 4th page of learning javascript 

// 26th/july/2022

/*<================PROMISE======================>*/

var myPomise = new Promise((response, reject) => {
    try {

        var num1 = 50;
        var num2 = 20;
        response(num1 + num2)
    } catch (error) {
        reject(error)
    }
}).then((data) => {
    console.log(data);
}).then(() => {
    console.log('promise is successful');
}).catch((error) => {
    console.log(error);
})

var myPromise = new Promise((response, reject) => {
    try {

        var name1 = "ibrahim";
        var name2 = "abdikadir";
        var both = `${name1} ${name2}`
        response(both)
    } catch (error) {
        reject(error)
    }
}).then((data) => {
    console.log(data);
}).then(() => {
    console.log("Promise succseful");
}).catch((error) => {
    console.log(error.message);
})

var myPromise = new Promise((response, reject) => {
    try {
        var num3 = 45;
        var num6 = 70;
        response(num3 + num6)
    } catch (error) {
        reject(error)
    }
}).then((sum) => {
    console.log(sum);
}).then(() => {
    console.log("Promise Done");
}).catch((error) => {
    console.log(error);
})

/*<====================SPREAD OPERATOR==================>*/
var people = [
    { name: 'musa', id: 2, race: 'black' },
    { name: 'keli', id: 6, race: 'brown' },
    { name: 'siman', id: 9, race: 'white' }
]

console.log(...people, { name: 'ibra', id: 4, race: 'black' });

/*<================REST OPERATOR/RETURN OPERATOR===========>*/
console.log([...people]);

// or 

var newPeople = [...people]
console.log(newPeople);


// Create htwo element 
var container = document.getElementById("inputs");
var hTwo = document.createElement("h2");
container.appendChild(hTwo);

document.getElementById("submit").onclick = () => {
    var inputs = document.querySelectorAll("#input");
    var allInputs = [...inputs]
    for (var i = 0; i < allInputs.length; i++) {
        console.log(allInputs[i].value);
    }
}

/*<===================CLASSES===========================>*/
class Newpeople {
    constructor(name, age, race, height) {
        this.name = name
        this.age = age
        this.race = race
        this.height = height
    }
}

var ibra = new Newpeople('ibra', 30, 'black', 3)
console.log(ibra);
var keli = new Newpeople('keli', 40, 'black', 4)
console.log(keli);

/*<==============CLASS INHERITANCE====================>*/

class People extends Newpeople {
    constructor(name, age, race, height, nationality) {
        super(name, age, race, height)
        this.nationality = nationality
    }
}

var musa = new People('musa', 40, 'black', 4, 'kenyan');
console.log(musa);

var abdi = new People('abdi', 50, 'black', 5, 'uganda')
console.log(abdi);

/*<===================Dealing with local storage=============>*/
// var url = "https://jsonplaceholder.typicode.com/users";

// async function getData(){
//     var checkStorage = await localStorage.getItem('people');
//     if(checkStorage){
//         var newData = JSON.parse(checkStorage)
//         console.log(newData);
//     }else{
//         var request = await axios(url);
//         var data = await request.data;
//         localStorage.setItem('people', JSON.stringify(data))
//     }
// }
// getData()


// var url = "https://jsonplaceholder.typicode.com/users";
// var get = async()=>{
//      var request = await axios(url);
//      var data = await request.data;
//      localStorage.setItem('human',JSON.stringify(data))
// }
// get()

// var url = "https://jsonplaceholder.typicode.com/users";

// var fetchData = async ()=>{
//     var checkStorage = await localStorage.getItem("users");
//     if(checkStorage){
//         var newPeople = JSON.parse(checkStorage)
//         console.log(newPeople);
//     }else {
//         var request = await axios(url);
//         var data = await request.data;
//         localStorage.setItem('users',JSON.stringify(data))
//     }
// }
// fetchData();

var posts = "https://jsonplaceholder.typicode.com/posts";

async function posting() {

    var checkStorage = await localStorage.getItem('posts');

    if (checkStorage) {
        var newPosts = JSON.parse(checkStorage);
        console.log(newPosts);
    } else {
        var request = await axios(posts);
        var data = await request.data
        localStorage.setItem('posts', JSON.stringify(data))
    }
}
posting()