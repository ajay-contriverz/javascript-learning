"use strict";

// const students = {
//     john: {
//         age: 20,
//         gender: 'male'
//     },
//     rita: {
//         age: 19,
//         gender: 'female'
//     }
// }

// console.log(students.john.age);

// const str = "   Hellow world and world   ";
// const str2 = "Hellow world and world";


// slice string
// console.log(str.slice(2, 8));
// console.log(str.substring(2, 8));
// console.log(str.substr(2, 4));
// slice string end

// replacing string
// console.log(str.replace(/world/g, " India"));
// replace is case sensetive and replace only the first match, using /textToReplace/g will change all matches
// console.log(str.replaceAll("world", "India")); //in javascript 2021 replaceAll is new method to replace all matches
// replacing string end

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());
// console.log(str.padEnd(10));
// console.log(str.padStart(100));
// console.log(str2.charAt(15));
// console.log(str2.charCodeAt(16));

// const text = "Apple, Banana, Mango, Berry, Orange";
// const fruits = "Apple Banana Mango Berry Orange";

// console.log(text.split(","))
// console.log(text.split(" "))
// console.log(text.match("Mango"))

// const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// console.log(fruitss.sort());
// console.log(fruitss.reverse());

// const nbrs = [1, 2, 5, 3, 55, 10];

// console.log(nbrs.sort(function(a, b){return a - b}))
// console.log(nbrs.sort(function(a, b){return b - a}))

// includes() return Boolean

// const dise = [1, 2, 3, 4, 5, 6];

// function diseSuffle() {
//     for(let i = dise.length - 1; i > 0; i--){
//         let j = Math.floor(Math.random()*(i+1));
//         let k = dise[i]
//         dise[i] = dise[j]
//         dise[j] = k
//         document.querySelector(".result").innerHTML = dise
//     }
// }
// const hToL =  points.sort(function(a,b){return a - b})
// console.log(hToL[0]);  // lowest value
// console.log(hToL[(hToL.length - 1)]); // heighest value
// points.sort(function(){return 0.5 - Math.random()});

// const points = [40, 100, 1, 5, 25, 10];
// console.log(Math.max.apply(null, points))

// const players = [
//     {
//         name: "Warner",
//         dob: 1990
//     },
//     {
//         name: "Smith",
//         dob: 1992
//     },
//     {
//         name: "Virat",
//         dob: 1988
//     },
//     {
//         name: "Rohit",
//         dob: 1975
//     }
// ]

// const results = players.sort(function(a,b){return a.dob - b.dob})

// for(let i = 0; i < results.length; i++){
//     console.log(`Serial No: ${i+1}, Name: ${results[i].name}, Birth year: ${results[i].dob}`)
// }
// console.log(`${results[0].name} is elder player and ${results[(results.length-1)].name} is smaller player`)

// players.sort((a, b) => a.name.localeCompare(b.name))
// players.sort(function(a,b){
//     if(a.name < b.name){
//         return -1
//     } else if(a.name > b.name){
//         return 1
//     } else {
//         return 0
//     }
// })


// console.log(players)
// const arr = [5, 2, 1, 4, 5, 9, 10, 55];

// let text = 0;
// arr.forEach(loopAry);

// function loopAry(value){
//     text += value;
// }
// console.log(arr)


// function arrMap(value){
//     return value*2;
// }

// console.log(arr.map(arrMap));
// console.log(arr);

// function arrFilter(value){
//     return value > 5;
// }
// console.log(arr.filter(arrFilter));
// console.log(arr);

// function arrReduce(total, value){
//     return total + value;
// }
// console.log(arr.reduce(arrReduce));
// console.log(arr.reduce(arrReduce, 10)); // The reduce() method can accept an initial value:

// function arrReduceRight(total, value){
//     return total + value;
// }
// console.log(arr.reduceRight(arrReduceRight));

// const arry = [5, 2, 1, 4, 5, 9, 10, 55];

// const arrfrom = Array.from("ljfa;lksdfjakldsfj")

// function arrEvery(value){
//     return value >= 1;
// }
// console.log(arry.every(arrEvery));

// function arrEvery(value){
//     return value > 8;
// }
// console.log(arry.some(arrEvery));

// console.log(arry.indexOf(55) + 1);
// console.log(arry.lastIndexOf(5) + 1);
// function arrFind(value){
//     return value > 5;
// }
// console.log(arry.find(arrFind));
// console.log(arry.findIndex(arrFind)+1);
// console.log(arrfrom);
// console.log(arry.includes(3));

// const players = ["Virat", "Rohit", "Rahul"];

// players.push("Dhoni");

// console.log(players);

// {
//     const players = ["Dhoni", "Rohit", "Rahul"];
//     console.log(players)
    
// }
// {
//     const players = ["Dhoni", "Rohit", "Rahul"];
//     console.log(players)
    
// }
// {
//     const players = ["Dhoni", "Rohit", "Rahul"];
//     console.log(players)
    
// }

// console.log(players)

// const date = Date.parse("10/31/2022");

// const newdate = new Date().getFullYear();
// document.querySelector(".result").innerHTML = newdate;
// const num = Math.random();
// console.log(Math.ceil(num*6))

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(getRndInteger(1, 20))
// let day;
// switch (new Date().getDay()){
//     case 0:
//     case 6:
//         day = "Weadend";
//         break;
//     default:
//         day = "Weakday"
// }

// console.log(day);
// let number = 10;
// let text = "";

// for (let i = 1; i <= number; i++) {
    
//     for (let j = 1; j <= i; j++) {
//         text += "*"; 
//     }
//     text += "\n"
// }

// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= number - i; j++) {
//         text+=" ";
//     }
//     for (let k = 1; k <= i; k++) {
//         text+="*"
//     }
//     text+="\n"
// }

// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= number - i; j++) {
//         text+=" ";
//     }
//     for (let k = 1; k <= i; k++) {
//         text+=" *"
//     }
//     text+="\n"
// }

// for (let i = 1; i <= number; i++) {
//     for (let j = number; j >=i ; j--) {
//         text+="*"
//     }
//     text+="\n"
// }

// for (let i = 1; i <= number; i++) {
//    for (let j = 1; j <= i; j++) {
//         text+=" "
//    }
//    for (let k = i; k <= number; k++) {
//         text+="*"
//    }
//    text+="\n"
// }
// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= i; j++) {
//          text+=" "
//     }
//     for (let k = i; k <= number; k++) {
//          text+=" *"
//     }
//     text+="\n"
// }

// for (let i = 1; i <= number; i++) {
//     for (let k = number; k >= i; k--) {
//         text+=" "
//     }
//     for (let j = 1; j <= i; j++) {
//         text+=" *"
//     }
//     text+="\n"
// }
// for (let i = 1; i <= number -1; i++) {
//     for (let j = 0; j <= i; j++) {
//         text+=" "
//     }
//     for (let k = number -1; k >= i; k--) {
//         text+=" *"
//     }
//     text+="\n"
// }

// for (let i = 1; i <= number; i++) {
//     for (let k = number; k >= i; k--) {
//         text+=" "
//     }
//     for (let j = 1; j <= i; j++) {
//         if (j==1 || j==i) {
//             text+="* "
//         } else {
//             text+="  "
//         }
//     }
//     text+="\n"
// }
// for (let i = 1; i <= number -1; i++) {
//     for (let j = 0; j <= i; j++) {
//         text+=" "
//     }
//     for (let k = number -1; k >= i; k--) {
//         if (k==number -1 || k==i) {
//             text+="* "
//         } else {
//             text+="  "
//         }
//     }
//     text+="\n"
// }

// console.log(text)

// const player = {name: "Virat", age: 35, sport: "Cricket"};
// for (const x in player) {
//     console.log(player[x]+" ");
// }
// let text = "";
// let i = "0";
// while (i < 10) {
//     text+=i + "\n";
//     i++
// }
// console.log(text)

// do {
//     text += "\n The number is " + i;
//     i++;
// }while (i < 10);  
// console.log(text)
// function checkNum(){
//     let input = document.querySelector("#input").value;
//     const output = document.querySelector(".result");
//     try{
//         if(input=="") throw "Enter a number";
//         if(input>25) throw "to high";
//         if(isNaN(input)) throw "Please enter a number";
//         if(input<15) throw "to low";
//         if(input>=15 && input <= 25) throw "Your entered right number";
//     } 
//     catch(err){
//         output.innerHTML = err
//     }
//     finally{
//         document.querySelector("#input").value = ""
//     }
// }

// console.log(this);

// const thisFus = function(a, b) {
//     console.log(this)
//     return a + b;
// }
// const thisarw = () => console.log(this)
// thisFus();
// thisarw();

// const obj = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         const fullNameArw = () => {
//             console.log(this)
//             console.log( this.firstName + " " + this.lastName)
//         }
//         fullNameArw()
//     },
// }
// obj.fullName()

// class car {
//     constructor(name, year){
//         this.name = name;
//         this.year= year;
//     }
//     carAge(){
//         const age = new Date().getFullYear();
//         return age - this.year;
//     }
// }

// const carNew = new car("MBW", 2015);
// console.log(carNew.name + " " + carNew.year)
// console.log("The car age is "+ carNew.carAge() + " years")

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}
let x;
const objLength = myObj.cars.length;
for (let i = 0; i < objLength; i++) {
    let x = myObj.cars[i];
    console.log(x.name+"\n")
    for (const key in x.models) {
        console.log(x.models[key])
    }
}