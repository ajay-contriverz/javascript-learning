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

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
// }
// let x;
// const objLength = myObj.cars.length;
// for (let i = 0; i < objLength; i++) {
//     let x = myObj.cars[i];
//     console.log(x.name+"\n")
//     for (const key in x.models) {
//         console.log(x.models[key])
//     }
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang.toUpperCase();
//     }
//   };
  
//   person.lang = "en";
// console.log(person.language);


// function Player(first, last, birth, playerType){
//     this.firstName = first;
//     this.lastName = last;
//     this.birthYear = birth;
//     this.player = playerType;
//     this.age = function(){
//         let lethisAge = 2022 - this.birthYear;
//         return lethisAge;
//     }
// }

// Player.prototype.fullName = function(){
//     let fullName = this.firstName + " " + this.lastName;
//     return fullName;
// }
// const playerOne = new Player("virat", "kohli", 1988, "right hand batsman");
// const playerTwo = new Player("rohit", "sharma", 1986, "right hand batsman");
// console.log(`Player 1: His name is ${playerOne.fullName()} and his age is ${playerOne.age()} and he is a ${playerOne.player}.`)
// console.log(`Player 2: His name is ${playerTwo.fullName()} and his age is ${playerTwo.age()} and he is a ${playerTwo.player}.`)


// function myDisplayer(some) {
//     console.log(some)
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// let person = {
//   name: 'John',
//   age: 25,
// };

// person.ssn = '123-45-6789';

// person.name = 'John Doe';

// delete person.age;


// console.log(person);

// let age = 25;
// let newAge = age;

// newAge = newAge + 1;
// console.log(age, newAge);

// var y, x;  
  
// [y=10, x=10] = [, 5];  
// console.log(y);
// console.log(x);


// const restaurant = {
//   resName: "abc",
//   category: ["Punjabi", "Italian", "Chines"],
//   openHours: {
//     mon:{
//       open: "12",
//       close: "22"
//     },
//     wed:{
//       open: "12",
//       close: "22"
//     },
//     sat: {
//       open: "0",
//       close: "22"
//     },
//   }
// }

// const {...other} = restaurant;
// console.log(other)
// const obj = [0, 1, ...restaurant.category]
// console.log(obj)
// const {resName: name , category: type, openHours: hour} = restaurant;
// console.log(name, type, hour);

// const num = function(...numbers) {
//   let sum = 0 ;
//   for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];    
//   }
//   console.log(sum)
// }

// num(2, 5, 2, 5, 9, 6);


// let guest = 2;

// console.log(guest || null || 15)
// console.log(guest && 10)

// const game = {
//   team1 : "Bayern Munich",
//   team2 : "Borrussia Dortmund",
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Getze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }


// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// const {team1:team1, x:draw, team2:team2} = game.odds;
// const {odds: {team1, x:draw, team2}} = game;

// const printGoals = function(players){
//   console.log(`${players.length} goals were scored`)
// }

// const [...players] = game.scored;


// console.log(players1, players2);
// console.log(gk, fieldPlayers);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1, draw, team2);
// printGoals(players);
// team1 > team2 && console.log("team 1 is more likely to win.")
// team1 < team2 && console.log("team 2 is more likely to win.")

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openHours = {
//   [days[2]]: {
//     open: 0,
//     close: 10
//   },
//   [days[3]]: {
//     open: 9,
//     close: 10
//   },
//   [days[5]]: {
//     open: 9,
//     close: 10
//   }
// }
// const checkDay = "adf";

// const closed = openHours[checkDay];
// const closedMsg = openHours[checkDay] ?? `On ${checkDay} restaurant will closed`;
// const openMsg = openHours[checkDay] ?? `On ${checkDay} the restaurant is Open at ${openHours[checkDay]?.open}:AM & closed at ${openHours[checkDay]?.close}:PM`;
// console.log(closed ? closedMsg : openMsg)


// const arr = (rounds, winRate) => {
//   const totalWin = (rounds / 100) * winRate;
//   const totalLos = rounds - totalWin;
//   const finalScore = []
//   for (let i = 0; i < totalWin; i++) {
//     const winSign = 1;
//     finalScore.push(winSign)
//   }
//   for (let i = 0; i < totalLos; i++) {
//     const lossSign = 0;
//     finalScore.push(lossSign)
//   }
//   for (let k = 0; k < finalScore.length; k++) {
//     var h = Math.floor(Math.random() * (k + 1));
//     var temp = finalScore[k];
//     finalScore[k] = finalScore[h];
//     finalScore[h] = temp;
//   }
//   console.log(finalScore)
// }

// arr(10, 80)

// const game = {
//   team1 : "Bayern Munich",
//   team2 : "Borrussia Dortmund",
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Getze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }

// for (const [index, value] of game.scored.entries()) {
//   console.log(`Goal: ${index+1} ${value}`)
// }

// const {odds: {team1: team1, x: draw, team2: team2}} = game;

// console.log(`Odd of Victory ${game.team1}: ${team1}\nOdd of Draw: ${draw} \nOdd of Victory ${game.team2}: ${team2}`)

// const exam = new Map([
//   ["question", "Who is the Indian Cricket team caption?"],
//   [1, "Virat"],
//   [2, "Rahul"],
//   [3, "Rohit"],
//   ["correct", 3],
//   [true, "This is correct Answer:)"],
//   [false, "Try again!"]
// ])

// console.log();

// for(const [key, value] of exam){
//   if(typeof key === "number"){
//     console.log(`Option ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt(`Enter your Answer (1, 2, 3)`));
// console.log(`${exam.get(exam.get("correct") === answer)}`);

// const gameEvents = new Map([
//   [17, "GOAL"],
//   [36, "Substitions"],
//   [47, "GOAL"],
//   [61, "Substitions"],
//   [64, "Yellow Cards"],
//   [69, "Red Cards"],
//   [70, "Substitions"],
//   [72, "Substitions"],
//   [76, "GOAL"],
//   [80, "GOAL"], 
//   [92, "Yellow Cards"]
// ])
// const gameTime = 90;
// const totalGameTime = [...gameEvents.keys()].pop();
// console.log(totalGameTime);
// const events = [...new Set(gameEvents.values())];
// gameEvents.delete(64);
// for(const [, value] of gameEvents.entries()){
//   events.add(value);
// }
// console.log(events);
// console.log(`An evnet happened, on average of, every ${totalGameTime / gameEvents.size} minutes`)

// for(const [key, value] of gameEvents.entries()){
//   const half = key <= gameTime / 2 ? "First" : "Second"
//   console.log(`[${half} half]: ${key}: ${value}`);
// }

// const msg = "hello hello world world";

// console.log(msg.replaceAll("Hello", "Hi"));

// const creditCard = function(number){
//   const str = number.toString()
//   const card = str.slice(-4);
//   return card.padStart(str.length, "*")
// }

// console.log(creditCard(1450789248521478))
// console.log(creditCard(1450789248522258))
// console.log(creditCard(1450789248528769))

// const cmlCase = function(n){
//   const arr = n.split("_");
//   const [first, last ] = arr;
//   const final = first.toLowerCase() + last.toLowerCase().replace(last[0], last[0].toUpperCase())
//   console.log(final)
// }

// cmlCase("FIRst_naME");

// const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Departure;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const flight = flights.split("+");
// for (const one of flight) {

//   const flightDetails = one.split(";");
//   const [status, from, to , time] = flightDetails;
//   const statusStr = status.replaceAll("_", " ").trim();
//   const fromStr = from.slice(0, 3).toUpperCase();
//   const toStr = to.slice(0, 3).toUpperCase();
//   const timeStr = time.replace(":", "h:");

//   console.log(`${statusStr.startsWith("Delayed") ? "🔴" : ""} ${statusStr} from ${fromStr} to ${toStr} (${timeStr})`);
// }

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetName = greet("Hello");
// greetName("John");

// greet("Hey")("Marry");

// const school = {
//   name: "ABC School",
//   code: "ABC",
//   addmissions: [],
//   addmission(name, addmissionNumber){
//     console.log(`${name} take addmission in ${this.name} with ${this.code + addmissionNumber} addmission number.`)
//     return this.addmissions.push([name, addmissionNumber]);
//   }
// }

// school.addmission("John", 250);
// school.addmission("Smith", 251);
// school.addmission("Sam", 252);
// // console.log(school.addmissions);


// const newSchool = {
//   name: "XYZ School",
//   code: "XYZ",
//   addmissions: []
// }

// const addmission = school.addmission;

// addmission.call(newSchool, "Rita", 250);

// const newAdd = ["Sam", 144];
// // addmission.apply(newSchool, newAdd); // apply is old method.
// addmission.call(newSchool, ...newAdd);

// const newSchoolAdd = addmission.bind(newSchool);
// const schoolAdd = addmission.bind(school);

// newSchoolAdd("Alexa", 100) 
// schoolAdd("Shiri", 150) 
// newSchoolAdd("Ajay", 200) 

// const poll = {
//   question: 'What is your favourite programing language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   getAnswer(){
//     const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));

//     typeof answer === 'number' && answer < this.options.length && this.answers[answer]++;
//     console.log(this.answers.join(", "))
//   },
//   printAns(type = "string"){
//     if (type === "array"){
//       console.log(this.answers);
//     } else if (type === "string"){
//       console.log(this.answers.join(", "))
//     }
//   }
// }
// poll.printAns.call({answers: [1, 5, 3, 9, 6, 1]}, "array");
// const getAnswer = () => {
//   let recAns = undefined;
//   recAns = prompt(`${poll.question}\n ${poll.options.join('\n')}\n(Write option number)`);
//   if (recAns < poll.options.length && recAns != "") {
//     poll.answers[recAns]++
//     console.log(`Your favourite programing language is ${poll.options[recAns]}.`)
//     console.log(poll.answers)
//   } else if (recAns === "") {
//     console.log(`Please answer the poll`)
//   } else {
//     console.log(`Please select valid option.`)
//   }
// }

//  document.querySelector("#click").addEventListener("click", getAnswer);
//  document.querySelector("#click").addEventListener("click", poll.getAnswer.bind(poll));


// const fun = function(){
//   console.log("hi");
//   return function(){
//     console.log("Hello")
//   }
// }
// const functio = fun()
// functio()


// (function(){
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function(){header.style.color = "blue"})
// })()



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let total = 0;
// for (const transition of movements) {
//   total += transition;
//   if (transition > 0) {
//     console.log(`Your account has been credited with +$${transition} 💚`)
//   } else {
//     console.log(`Your account has been debited with -$${Math.abs(transition)} 💔`)
//   }
// }
// console.log(`Total balance is $${total}`)
// console.log(`========== **** ==========`)

// let total1 = 0;
// movements.forEach (function(transition){
//   total1 += transition;
//   if (transition > 0) {
//     console.log(`Your account has been credited with +$${transition} 💚`)
//   } else {
//     console.log(`Your account has been debited with -$${Math.abs(transition)} 💔`)
//   }
// })
// console.log(`Total balance is $${total1}`)

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(cur, i){
//   console.log(`${i}: ${cur}`)
// })

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const juliaDog = julia.slice(1, -1);

// const juliaDogAge = function(dog){
//     dog.forEach(function(age, i){
//         if (age >= 5) {
//             console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//         }
//     })
// }
// juliaDogAge(kate);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const movementsUSD = movements.map(mov => mov * euroToUSD);
// console.log(movementsUSD)

// const deposits = movements.filter(mov => mov > 0);
// const withdrowals = movements.filter(mov => mov < 0);
// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// const balance = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);

// console.log(deposits)
// console.log(withdrowals)
// console.log(balance)

// const calcAverageHumanAge = function(dogAge){
    //     const humanAge = dogAge.map(age => age <= 2 ? age * 2 : 16 + age * 4);
    //     const adultDogs = humanAge.filter(age => age >= 18);
    //     const calcAvgAdultDogs = adultDogs.reduce((acc, val) => acc + val / adultDogs.length, 0);
    // const calcAvgAdultDogs = adultDogs.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
    //     console.log(calcAvgAdultDogs)
    // }
    // calcAverageHumanAge(ages)


// const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = dogAge => 
//     dogAge
//         .map(age => age <= 2 ? age * 2 : 16 + age * 4)
//         .filter(age => age >= 18)
//         .reduce((acc, val, i, arr) => acc + val / arr.length, 0);

// console.log(calcAverageHumanAge(ages))


// const arr = ["Rohit", "Virat", "Rahul", "Dhoni"];
// const num = [5, 2, 4, 1, -15, 15, -8, 3];

// console.log(arr.sort())
// console.log(num.sort((a, b) => a - b ))

// const dogs = [
//     {
//         weight: 22, curFood: 270, owners:['Alice', 'Bob']
//     },
//     {
//         weight: 8, curFood: 200, owners:['Matilda']
//     },
//     {
//         weight: 13, curFood: 275, owners:['Sarah', 'John']
//     },
//     {
//         weight: 32, curFood: 340, owners:['Michael']
//     }
// ]

// dogs.forEach(dog => dog.recFood = Math.round(dog.weight ** 0.75 * 28));
// console.log(dogs)

// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
// console.log(`Sarah's dog eating too ${sarahDog.curFood > sarahDog.recFood ? "much" : "little"}!`)


// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).map(dog => dog.owners).flat();
// const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).map(dog => dog.owners).flat();

// console.log(`"${ownersEatTooMuch.join(" and ")}'s dogs eat too much!" and "${ownersEatTooLittle.join(" and ")}'s dogs eat too little!"`);

// const exatFoodDog = dogs.some(dog => dog.curFood === dog.recFood);
// const okFoodDog = dogs.some(dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10);

// console.log(`there is any dog eating EXACTLY the amount of food that is recommended: ${exatFoodDog}`)
// console.log(`there is any dog eating OKKKK the amount of food that is recommended: ${okFoodDog}`)

// const cheFoodOk = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// const okFoodDogArr = dogs.filter(cheFoodOk)

// console.log(okFoodDogArr)