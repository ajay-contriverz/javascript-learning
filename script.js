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
const arr = [5, 2, 1, 4, 5, 9, 10, 55];

const text = 0;
arr.forEach(loopAry);

function loopAry(value){
    text += value;
}
console.log(arr)
