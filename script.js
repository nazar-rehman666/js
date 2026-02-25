// // primitive data type
// // string >>>>>>>>> 1
// let z = '10';
// console.log( typeof z);
// // Boolean true false >>>>>>>>> 2
// let learning = true;
// let completed = false
// console.log( typeof  learning)
// console.log(completed)
// let x =20>10;
// console.log(x)
// //  undefined >>>>>> 3
// let age = 30;
// console.log(age)
// console.log(typeof age);
// //  null >>>>>>>>>> 4
// let number = null;
// console.log(number);
// console.log(typeof number);
// // number >>>>>> 5
// let y = 39;
// console.log( typeof y)
// // Symbol  >>>> 6
// let nazar = Symbol(['its the name of studebt'])
// console.log(typeof nazar)
// // BigInt >>>> 7
// let hugNumber = 28374234932n;
// console.log(typeof hugNumber)
// // Non primitive data type
// // Object >>>>>
// let person = {
//   fisrtName : 'elon',
//   lastName : 'musk',
//   age :35
// };
// console.log(person);
// console.log(typeof person);
// // function >>>>>
// // let ad = MouseEvent;
// // console.log(ad)
//   let c = 89;
//   console.log(typeof c)
// //////////////////// array javascript //////////////////
// let n=[890, 4677777,0];
// console.log(typeof  n);
// console.log(n[n.length-1])
///////// non primitive data types array function Object///////////
// const item = {
//   "harry": true,
//   "shubh": false,
//   "lovish": 67,
//   "rohan": undefined
// }
// console.log(item["shubh"]);
// console.log(item.harry)
//////// javascript operator and expressions ///////////
// console.log("opreator in js")
// let a = 45;
// let b = 4 ;
// console.log("a + b =",a+b)
// console.log("a - b = " , a-b)
// console.log("a / b = " , a/b)
// console.log("a * b = " ,a*b)
// let k = Array;
// console.log(typeof k)
// var name = "ali";
// var name = "khan"
// console.log(name)
///////
// let a = prompt("hey whats you age?");
//  a = Number.parseInt(a);  ////converting the string to a Number
// if ( a <= 9){
//     alert("your age is less than 9 and you are not eligible for driving")
// } else if (a<18){
//     alert("your age is less than 18 wait untel");
// } else if (a<25){
//     alert("your age is less than 25 wait untel")
// }
// else{
//     alert("you are eligible for driving")
// }
// if else
// if (   2 === 3  || 4 > 5    ) {
//   console.log("u are right 2 is equal to 2 ");
// } else {
//   console.log("its false");
// }
// Practice Set on Operators and Conditionals/////////////
// let age = prompt("what is your age?");
// age = Number.parseInt(age);
// console.log(typeof age);
// if (age > 10 && age < 20) {
//   console.log("your lies between 10 and 20");
// } else {
//   console.log("your lies not between 10 and 20");
// }
// let intro = prompt("what your name ?");
// console.log(intro);
// if (intro < "my name is nazar rehman");
// let c = Symbol;
// console.log(c);

//chapter 2ps
// problemm no 2

// let age = prompt("what is your age?");
// switch (age) {
//   case 12:
//     console.log("your ag is 12")
//   case 13:
//     console.log("your age is 13")
//   case 14:
//     console.log("your age is 14")
//   case 15:
//     console.log("your age is 15")
//   default:
//     console.log("your age is not specail")

// }

// let a = false; // condition 1
// let b = true; // condition 2
// let c = false; // condition 3

// if ( a || b && c ) {
// console.log("if part runs");
// } else {
// console.log("else part run");
// }

// let d = 889;
// let d = 90;
// console.log(d);

// var d = "this  is a variables";

// array and us ka index ur method //////////////
// let fruits = ["apple", "orange", "mango"];
// // document.getElementById('item').innerText= fruits[0]
// console.log(fruits);
// console.log(fruits[0]); //apple
// console.log(fruits[1]); //orange
// console.log(fruits[2]); //mango
// console.log(fruits.length);

// // object ////////////
// let student = {
//   name: "ali",
//   age: "20",
//   city: "islamabad",
//   course: "web development",
// };
// console.log(student.course);

// // function/////////

// function sayhello() {
//   console.log("hello");
// }

// // logical opretor///////////
// // let age = 20;
// // let hasCNIC = true;
// // if (age >= 18 && hasCNIC === true) {
// //   console.log("Allowed");
// // } else {
// //   console.log("Not Allowed");
// // }

// //  logic
// // let age = 50;
// // if (x >= 18){
// //   document.write("this is true");
// // }

// let khan = ["let", "var", "const", "zeshan", "890", "804", "12333333"];
// // console.log(khan.length[6])
// console.log(khan.length);

// let enjoyTheMoment = {
//   coding : "2 hours",
//   chai : "1 cup "
// }

// let mobile_model = [
//   "realme",
//   "sumsung",
//   "iphone",
//   "nokia",
//   "oppo",
//   "tecno",
//   "google_pixel"
// ]
// console.log(mobile_model[6]);
// console(mobile_model[3]);

// if (3 < 5) {
//   console.log('true')

// } else {
//   console.log('false')
// }

// 3 > 5 ? console.log('true') : console.log('fasle')
//  task >= 10 ? console.log("the numbr is big"): console.log("the number is small");

//////////////////// let get task start////////////////////////////////////
// // task 1
// let task = 1;
// if (task >= 10) {
//   console.log("the numbr is big");
// } else {
//   console.log("the numbr is small");
// }
// // task 2
// let age = 7;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you cannot vote");
// }
// // task 3
// let password = "1234";
// if (password = "1234") {
//   console.log("login succcesfully");
// } else {
//   console.log("wrong password");
// }
// // task 4
// let temperature = 30;
// if (temperature < 31) {
//   console.log("it is hot");
// } else {
//   console.log("it is normal");
// }
// // task 5
// let number = 4;
// if (number % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("odd number");
// }
// // task 6
// let inLoggeddIn = true;
// if(inLoggeddIn){
//   console.log('Welcome')
// } else{console.log('Please login')};
// // completed////////
// ///////////////////////////////////////////////////////////////////////////
// // task number 2 ///////////////////////////////////
// // task 1
// let task1=20;
//  task1 >= 10 ? console.log("the numbr is big"): console.log("the number is small");
// // task 2
// let age2 = 20;
// age2 >= 18 ? console.log("you can vote ") : console.log("you cannot vote");
// // task 3
// let password2 = '2468';
// password = "1234" ? console.log("login succcesfully"): console.log("wrong psasword");
// // tsak 4
// let temperature2 = 31;
// temperature2 <= 32 ? console.log("it is hot") : console.log("it is normal");
// // task 5
// let number2 = 5;
// number2 % 4 === 0 ? console.log("even number") : console.log("odd number");
// // task 6
// let inLoggeddIn2 = true ;
// inLoggeddIn2 ? console.log("welcome") : console.log("please login");

// task 2 ///
// let age3 = 18;
// let hasID = 13101-7158935-3;
// if (age3 >=  18 && hasID) {
//   console.log("allowed")

//  }else{
//   console.log("not allowed")
//  };
//  task 2
// let username = "admin";
// let password = "1234";
// if (username === 'admin' && (password === 1234)) {
//   console.log("login successful")
// } else {
//   console.log("login failed")
// };

// // task 3
//  let isWeekend = true;
// let isHoliday = true;
// if (isWeekend || isHoliday){
//   console.log('you can relax')
// }else{
//   console.log('Go To Work')

// }
// // task 4
// let mmarks =

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;

//   case 2:
//     console.log("tuesday");
//     break;

//   case 3:
//     console.log("wednesday");

//     break;
//   default:
//     console.log("Invalid day");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i+1);
// }
// for (let n = 1; n <=10 ; n++){
//   console.log(n)
// }
//   for (let m =10; m  >=3 ; m--){
//     console.log(m)
//   }
//   // for (let k = 1; k >=8 ; k++) {
//   //   console.log(k)
//   // };
//   for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// } Microsoft.QuickAction.MobileHotspot

// for (let k = 1 ; k <= 800; k++){
//   console.log(k)
// };
// for (let o = 23; o <= 100; o++){
//   console.log(o)
// };

// for (let dh = 90 ; dh < 250; dh++){
//   console.log(dh)
// };
//  for (let name = 781; name <= 900; name++){
//   console.log(name)
//  };

// for (let merik = 89; merik <=100; merik++){
//   console.log(merik)
// };

// for (let i = 0; i <5; i++){
//   console.log(i)
// }

// f//or in
// let obj = {
//   name:'nazr',
//   age: '23',
//   class: "narsary"
// }

// for (let a in obj){
//   console.log(obj[a] )
// }

// for of loop////
// for (let b of "nazar"){
//   console.log(b)
// }

// let like = {
//   merik: 'dev',
//   ir: 'solution',
//   synclogia: 'software'
// }
//  for (let c in like){
//   console.log(like[c])
//  };

// while (false) {
//   console.log("nazar");

// }

// do {
//   console.log('it will run one time before the condition is checked')
// } while (false);

//function body
// function add() {
//   console.log("this is a function");
// }
// add(); ///////// function call /////////>

// add();
// add();

//function definition
// function add(a, b ,c) {
//   let sum = a+b+c
//   return (sum);
// }

// let total = add(5, 3 ,200 );

// console.log(total);

// let j = 890;
// console.log(j);

// for (let k = 46; k <=50;k++){
//   console.log(k)
// }

// Practice set loops and functions /////

// let marks = {
//   harry: 90,
//   shubham: 9,
//   lovish: 4,
//   monika: 56,
//   sdc:23,
//   cer:53,
//   grg:53

// };
// console.log( "harry " , marks.harry)
// console.log( "subham " , marks.shubham)
// console.log( "lovish " , marks.lovish)
// console.log( "monika " , marks.monika)

// for( let i =0; i < Object.keys(marks).length ; i++){
//   console.log(Object.keys(marks)[i] , Object.values(marks)[i])
  
// }
// for (let i = 0; i < 4 ; i++) {
//   console.log(
//     "the marks of " +
//       Object.keys(marks)[i] +
//       " " +
//       "are" +
//       " " +
//       marks[Object.keys(marks)[i]],
//   );
// }

// let sum =  (a, b) => a +  b;

// console.log(  sum(3, 4)   );


// let person = {
//   name : "nazar",
//   Age: 21,
//   City : "abbottabd"
// }

// console.log(person.name)
// console.log(person["name"])
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// let merik = {
//   zeshan : 25,
//   mustafa : 3,
//   cat : 1,
//   pen : 2

// }
// for (let z = 1; z < Object.keys(merik).length ; z++){
// console.log(Object.keys(merik)[z] , Object.values(merik)[z])
// }


// console.log("zeshan" , merik.zeshan)
// console.log("mustafa" , merik.mustafa)
// console.log("cat", merik.cat)
// console.log("pen" , merik.pen)


// prectical functions ///////

// // 1
// function sayhello(){
//   console.log("hello javscript");
// }
// sayhello();



// // 2

// function greetUser(name) {
//   console.log("Hello,<name>");
// }
// greetUser();


// // 3


// function sum (a, b) {
//   console.log(a+b)
// };

// sum(44 , 66);

// // 4

// function sum (a,b) {
//   return(a+b)
// };
// let result = sum(3,5);
// console.log(result)

// // 5


// function checkEvenOdd(num) {
//   if (num %  2=== 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(checkEvenOdd(8));
// 6/////

















