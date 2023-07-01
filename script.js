// // Multiple Line Comment
// // 1
// // 2
// // 3
// // 4
// // */
// // // Add Variables Here

// // // Ouput
// // numberOne=10
// // numberTwo=20
// // console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
// // console.log(typeof(numberOne+""+numberTwo)); // Normal Concatenate => String
// // console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// // console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

// // console.log(numberTwo+'\n'+numberOne);
// // /*
// //   Normal Concatenate
// //   20
// //   10
// // */

// // console.log(`${numberTwo}
// // ${numberOne}`);
// // /*
// //   Template Literals Way
// //   20
// //   10
// // */
// // console.log(elzero.innerHTML); // object
// // console.log(typeof elzero); // object

// // let a = 21;
// // let b = 20;

// // console.log(`_${`${a}_${b}`.repeat(4)}_`); // _21_2021_2021_2021_20_
// // console.log(`${true?"asdawe":"falesedfwqaqd"}`)

// // console.log(`\`I'm In
// // \\\\
// // Love \\\\ """ '''
// // ++ With ++
// // \\"""\\"""
// // ""JavaScript""\`\``)

// // let theTitle="Elzero" , theDescription="Elzero Web School", theDate="25/10",
// // Cards=`
// // <div class="card">
// //     <h3>${theTitle}</h3>
// //     <p>${theDescription}</p>
// //     <span>${theDate}</span>
// // </div>
// // `.repeat(3)
// // document.write(Cards)

// // // The new way (SOON)
// // for(let i =0;i<3;i++) {
// //     // create div element in javascript
// //     const divElement = document.createElement('div');
// //     // setting className of div element to "card"
// //     divElement.className = 'card';
// //     // create h3 element in javascript
// //     const h3Element = document.createElement('h3');
// //     // setting textContent of h3 element to theTitle Variable
// //     h3Element.innerHTML = theTitle;
// //     const pElement = document.createElement('p');
// //     pElement.innerHTML = theDescription;
// //     const spanElement = document.createElement('span');
// //     spanElement.innerHTML = theDate;
// //     //adding h3,p,span in the div
// //     divElement.append(h3Element,pElement,spanElement);
// //     // Adding the card Element to the body
// //     document.body.appendChild(divElement)
// // }

// // // console.log(x); // Error can't access variable before initialization
// // console.log(y); // undefined
// // let x = 10;
// // var y = 20;

// let a = 10; //11 > 12
// let b = "20"; //20 > 21>>22
// let c = 80; //80 > 81 > 82

// console.log(++a + +b++ + +c++ - +a++);
// /* [++]  [+] [+b] [b++] [+] [+c] [c++] [-] [+a] [a++]
//     11 + 20 + 80 - 11
// */
// console.log(++a + -b + +c++ - -a++ + +a);
// /* [++a] [+] [-b] [+] [+c] [c++] [-] [-a] [a++] [+] [+a]
//     13 + -21 + 81 - -13 + 14
// */
//  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//   // [--c] [+] [+b] [+] [--a] [*] [+b][b++] [-] [+b] [*] [+] [--a] [-] [+true]
//   // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
// /*
//   Examples:
//   [++a]
//   - Value: ???
//   - Explain: ???
//   [+]
//   - Explain: Addition Operator
// */

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d*+e); // 2000
// console.log(++g * ++e + ++f + -d); // 173

// // Replace ? With Arithmetic Operators
// console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// // 0*10*400

// let num = 3;

// // Solution One
// console.log(num*--num); // 6

// // Solution Two
// console.log(++num + num); // 6

// // Soultion Three
// console.log((num+ ++num)-true); // 6

// // Soultion Four
// console.log((num+num+num)/(true+true)); // 6

// // Solution Five
// console.log(--num + (true*3)); // 6

// // Solution Six
// console.log(-(num + -(true*9))); // 6

// let bum = "10";

// // Solution One
// console.log(+bum * (true+true)); // 20

// // Solution Two
// console.log(+bum + +bum); // 20

// // Solution Three
// console.log((+bum * (true+true+true+true))/(true+true)); // 20

// // Solution Four
// console.log(+bum + +"10"); // 20

// let points = 10;

// // // Write Your Code Here

// // console.log(points-- +(true+true+true)); // 13

// // // Write Your Code Here

// // console.log(--points); // 8;

// // // To string >> Return String
// // console.log((100.10).toFixed(1)) //toFixed >> return fixed num u can choice the numbers after point
// // console.log(parseInt("    1   100 osama 50")) // return int as a number
// // console.log(parseFloat("1.120.5   100 osama 50")) // Return float as a number
// // let a = 100;
// // let b = 2_00.5;
// // let c = 1e2;
// // let d = 2.4;

// console.log(Math.trunc(Math.min(a,b,c,d)))
// // Use Variables a + d One Time To Get The Needed Output
// console.log((a*Math.floor(b))/2); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.trunc(d)); // 2
// console.log(Math.floor(d)); // 2
// console.log(Math.round(d)); // 2
// console.log(parseInt(d)); // 2

// // Use Variables b + d To Get This Valus
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil((Math.floor(b)/Math.ceil(d)))); // 67 => Number

// console.log(1e5); // 100000
// console.log(1_000_00); // 100000
// console.log(100*1000); // 100000
// console.log(Math.pow(100,2.5)); // 100000
// console.log(200000/2); // 100000
// console.log(5e4+5e4); // 100000
// console.log(100000); // 100000
// console.log(10*10*10*10*10); // 100000
// console.log(100000.00000); // 100000
// console.log(Number("100000")); // 100000

// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(+parseFloat(myVar).toFixed(2)); // 100.57
// let num = 10;

// console.log(num.toString().length); // 2
// console.log(Number(Number.isInteger(num))+true); // 2

// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(+flt.toFixed(0)); // 10

// console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4

// let theName="  ahmed  "
// console.log(theName.trim().charAt(2).toUpperCase())

// let v = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(v.toUpperCase().charAt(2) + v.slice(3,6)); // Zero

// // 8 H
// console.log(v.charAt(v.length-4).repeat(8).toUpperCase()); // HHHHHHHH

// // Return Array
// console.log(v.split(" Web School",1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${v.substring("Elzero",7)}${v.substring(v.length-6)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(`${v.charAt(0).toLowerCase()+ v.slice(1,v.length-1).toUpperCase() + v.charAt(v.length-1).toLowerCase()}`); // eLZERO WEB SCHOOl

// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.split("",1).join().toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName[0].repeat(3).toLowerCase()); // eee

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

// console.log(10=="10") // == compareValue Only  >>> True
// console.log(10==="10") // == compareValue and type  >>> False

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 !== "-10"); // true
// console.log(- -50 >= +"-40"); // true
// console.log(- 10 <= -"-40"); // true
// console.log(+ "10" === 10); // true
// console.log(- 20 < false); // true
// console.log("*".repeat(20))
// let num1 = 10;
// let num2 = 20;

// console.log(num1!=num2); // true
// console.log(!(num2<num1)); // true
// console.log(num2>=num1); // true
// console.log(num2/num1===(true+true)); // true
// console.log(num1==10 && num2==20); // true
// console.log(num1==10 || num2==30); // true
// console.log("*".repeat(20))

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a != b); // true
// console.log(a < b || a > c); // true
// console.log(!(a > b) && !(a === b) && !(a < c) && !(a == c)); // true

// let a = 10;

// a < 10
//   ? console.log(a)
//   : a >= a && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

// let st = "Elzero Web School";

// if (st[st.indexOf("W")].toLowerCase() === "w") {
// console.log("Good");
// }
// console.log(typeof typeof 5);
// if (typeof st.length !== "string") {
//   console.log("Good");
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// if (st.length * (true + true) === "34") {
//   console.log("Good");
// }

// Test Case 1
// let num = 9; // "009"

// if (num<10){
//     console.log(`00${num}`)
// }

// // Test Case 2
//  let num = 20; // "020"

// if (num>10 && num<100){
//     console.log(`0${num}`)
// }
// // Test Case 3
// let num = 110; // "110"
// if (num>=100){
//     console.log(num)
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1==str){
//     console.log(`${num1} Is The Same Value As ${str}`)
// }
// if(num1===str){
// console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
// }
// if (num1!==str2){
//     console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`)
// }
// if(str!=str2 && str===str2){
//     console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
// }
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (num3>num1 && typeof num3!= typeof num1){
//     console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`)
//     if(num3 > num1  && num3==num2){
//         console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`)
//     }
//     if(num3!==num1 && typeof num3!= typeof num1){
//         console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
//     }
// }
// Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = +"11";
// let num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

// if (num1 > num2) {
//   console.log("True"); //  Done-----------------
// } else {
//   console.log("False");
// }

// Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");      //  Done-----------------
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");      //  Done-----------------
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");    //  Done-----------------
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");   //  Done-----------------
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");   //  Done-----------------
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");   //  Done-----------------
// } else {
//   console.log("False");
// }

// // let day=2

// // switch(day){
// //   case 0:
// //     console.log("SunDay");
// //   break;
// //   case 1:
// //     console.log("Mon");
// //     break;
// //   case 2:
// //     console.log("Monday");
// //     break;
// //   default:
// //     console.log("yyayaya");
// // }

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch(job){
//   case job==="Manager":
//     salary=8000;
//     console.log(`${salary}`);
//     break;
//   case job==="IT" || job==="Support":
//     salary=6000;
//     console.log(`${salary}`);
//     break;
//   case job==="Developer" || job==="Designer":
//     salary=7000;
//     console.log(`${salary}`)
//     break;
//   default:
//     salary=4000;
//     console.log(salary);
// }

// let holidays = 0;
// let money = 0;

// if(holidays===0){
//   money=5000;
//   console.log(`My Money is ${money}`);
// }
// else if (holidays===1 || holidays===2){
//   money=3000;
//   console.log(`My Money is ${money}`);
// }else if(holidays===3){
//   money=2000;
//   console.log(`My Money is ${money}`);
// }else if (holidays===4){
//   money=1000;
//   console.log(`My Money is ${money}`);
// }else if (holidays===5){
//   console.log(`My Money is ${money}`);
// }else{
//   console.log(`My Money is ${money}`);
// }

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// let day = "   Friday  ";
// // // You Need To Remove Spaces And Make First Letter Capital => Friday
// console.log(day.trim()[0].toUpperCase() + day.trim().slice(1,))
// switch(day.trim()[0].toUpperCase() + day.trim().slice(1,)){
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;
//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;
//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;
//   case "World":
//     console.log("Its Not A Valid Day");
//     break;
//   default:
//   console.log("Null")
// }

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// let Friends=["Ahmed","Mohamed","ali","Sayed"]

// Friends.unshift("ali")
// console.log(Friends)
// let fri=Friends.shift()
// console.log(Friends)

// Friends.push("ahah")
// console.log(Friends)
// Friends.pop()
// console.log(Friends)

// Friends.shift()
// console.log(Friends)

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.reverse().splice(zero,counter-true)
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(my.length-counter,counter)); // ["Elham", "Mazero"]

// console.log(my[my.length-counter].slice(zero,my[my.length-counter].length-counter)+my[my.indexOf('Mazero')].slice(my[my.indexOf('Mazero')].length/counter,)); // "Elzero"
// console.log(my[my.indexOf('Mazero')].slice(-my[my.indexOf('Mazero')].length/counter).replace("o","O")); // "rO"

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.splice(0,1)+friends.splice(2,1)
// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr=finalArr.concat(arrOne,arrTwo).sort().reverse()

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2,).toUpperCase()); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// if (haystack.includes(needle)){
//   console.log("we found it bro")
// }

// if(haystack.indexOf(needle) !== -1){
//   console.log("We Found it")
// }
// if(haystack.lastIndexOf(needle) !== -1){
//   console.log("We Found it")
// }

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// allArrs= allArrs.concat(arr1,arr2).sort().join("").toLowerCase().slice(arr2.length)
// // Your Code Here

// console.log(allArrs); // fxy

// // Write 3 Solutions
// let products=["Keybord","Mouse","Pen","Pad","Monitor"]
// let colors=["Red","Green","Black"]

// for(let i=0;i<products.length;i++){
//   console.log(products[i]);
//   if(products[i]==="Pen"){
//     break;
//   }
// }

// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output

// for (i=start;i<=end;i=i+10){
//   if(i==40)continue;
//   console.log(i)
// }
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start = 10;
// let end = 0;
// let stop = 3;

// for (i=start;i>=stop;i--){
//   if(i===start){
//     console.log(`${i}`); //10
//     continue;
//   }
//   console.log(`${end}${i}`);
// }
// for (i=start;i>=stop;i--){
//   if(i<start) console.log(`0${i}`); //10
//   else console.log(`${i}`);

// }
// for (i=start;i>=stop;i--){
//   console.log(i<start?`0${i}`:`${i}`); //10
// }
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i=start;i<=end;i++){
//   console.log(i)
//   for(let j = breaker;j<end;j+=breaker){
//     console.log('--', j)
//   }
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index)
//   if(index===4)break;
//   index-=jump
// }

// // Output
// 10
// 8
// 6
// 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let filterList = []
// if(friends[i].startsWith(letter.toUpperCase()))
// for(let i=0;i<friends.length;i++){
//   if(friends[i].startsWith(letter.toUpperCase())){
//     continue;
//   }
//   filterList.push(friends[i])
//   console.log(`${i}=> ${friends[i]}`)
// }
// console.log(filterList)
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// let filterList2 = friends.filter((friend)=> !friend.startsWith(letter.toUpperCase())
// )

// console.log(filterList2)

// let start = 0;
// let swappedName = "elZerO";

// if (swappedName[0].toUpperCase() === swappedName[0]){
//   console.log("capital")
// }else{
//   console.log("small")
// }
// let result='';
// for(let i = 0; i<swappedName.length;i++){
//   if (swappedName[i].toUpperCase() === swappedName[i]){
//   result = result + swappedName[i].toLowerCase()
//   }
//   else{
//     console.log(swappedName[i].toLowerCase())
//     result = result + swappedName[i].toUpperCase()
//   }
// }
// console.log(result)
// // Output
// "ELzERo"

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for(let i = start;i<mix.length;i++){
//   if (typeof mix[i] === typeof "string" || mix[i]===mix[start]){
//     continue;
//     }
//   console.log(mix[i])
// }
// // Output
// 2
// 3
// 4

// let products=["keyboard","Mouse","Case","MotherBorad"]
// let showCase=products.length
// document.write(`<h1>Prouducts Number Is ${showCase}</h1>`)
// for (let i = 0;i<products.length;i++){
//   document.write("<div>")
//   document.write(`<h2>${products[i]}</h2>`)
//   document.write("</div>")
// }

// let index=0

// do{
//   console.log("hello")
// }
// while(false)

// let myAdmins = ["Ahmed", "Osama", 'Sayed', 'Stop', 'Samera'];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let adminFillter=[]
// for(let i=0;i<myAdmins.length;i++){
//   if( i >= myAdmins.indexOf("Stop") ){ // index of stop : 3
//     continue
//   }
//   adminFillter.push(myAdmins[i])
// }
// document.write(`<div>We Have ${adminFillter.length} Admins</div>`)
// document.write("<hr>")
// for(let i = 0 ; i<adminFillter.length;i++){
//   document.write("<div>")
//   document.write(`The Admin for Team ${i+1} Is ${adminFillter[i]}`)
//   document.write("<h3>Team Members:</h3>")
//   let incrementEmployees = 0;
//   for(let j=0;j<myEmployees.length;j++){
//     if(myEmployees[j].startsWith(adminFillter[i][0])){
//       document.write(`<p>- ${++incrementEmployees} ${myEmployees[j]}</p>`)
//     }
//   }
//   document.write("</div>")
//   document.write("<hr>")
// }

// admin filter = ['Ahmed', 'Osama', 'Sayed']
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// let swappedName = "elZerO";
// let start = 0;
// let afterSwap=[]
// //          Z                        Z
// // if(swappedName[0].toUpperCase()=== swappedName[0]){
// //   console.log(swappedName[0].toLowerCase())
// // }else{
// //   console.log(swappedName[0].toUpperCase())
// // }

// for (let i = 0; i<swappedName.length;i++){
//   if(swappedName[i].toUpperCase()=== swappedName[i]){
//     console.log(swappedName[i].toLowerCase())
//   }else{
//     console.log(swappedName[i].toUpperCase())
//   }
//   afterSwap.push(swappedName[i])
// }

// console.log(afterSwap.join(''))

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// let friendsFillter=[]

// for(let i = index ; i<friends.length;i++){
//   if(typeof friends[i] ==="number"||friends[i].startsWith("A")){
//     continue;
//   }
//   else{
//     friendsFillter.push(friends[i])
//   }
// }
// for (let z = index; z<friendsFillter.length;z++){
//   console.log(`${++counter} =>${friendsFillter[z]}`)
// }

// Output
// "1 => Sayed"
// "2 => Mahmoud"

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let friendsFillter=[]

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// for (let i = 0; i<friends.length;i++){
//   if(friends[i].startsWith(letter.toUpperCase())){
//     friends.splice(i,letter.length)
//   }
//   // friendsFillter.push(friends[i])
// }
// console.log(friends)
// console.log(friendsFillter)

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// let friendsFillter=[]
// let i = 0
// while(i<friends.length){
//   if(typeof friends[i] ==="number"||friends[i].startsWith("A")){
//     i++
//     continue;
//   }
//   else{
//     friendsFillter.push(friends[i])
//     i++
//   }
// }
// console.log(friendsFillter)
// let z= 0
// while (z<friendsFillter.length){
//   console.log(`${++counter} =>${friendsFillter[z]}`)
//   z++
// }

// Output
// "1 => Sayed"
// "2 => Mahmoud"

// let myAdmins = ["Ahmed", "Osama", 'Sayed', 'Stop', 'Samera'];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let stopIndex = myAdmins.indexOf("Stop");
// let myAdminsFiltered = myAdmins.slice(null,stopIndex);

// debugger
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// myAdminsFiltered = ["Ahmed", "Osama", "Sayed"]
// let employeesFilter=["Amgad", "Ameer", "Amany", "Omar", "Othman", "Samah", " Samia"]
// document.write(`<div>We Have ${myAdminsFiltered.length} Admins</div>`);
// document.write(`<hr>`);
// // debugger
// for(let i=0;i<myAdminsFiltered.length;i++){
//   document.write("<div>")
//   document.write(`The Admin For Team ${i+1} Is ${myAdminsFiltered[i]}`)
//   document.write("<h3>Team Members:</h3>")
//   let counter=0
//   for(let z=0;z < myEmployees.length;z++){
//     if(myEmployees[z].startsWith(myAdminsFiltered[i].charAt(0))){
//       document.write(`<p>- ${++counter} ${myEmployees[z]} </p>`)
//     }
//   }
//   document.write("</div>")
//   document.write("<hr>")
// }

// function yearsCounter(start,end,skip){
//   for(let i = start;i<=end;i++){
//     if(i===skip){
//       continue;
//     }
//     console.log(i)
//   }
// }
// yearsCounter(2001,2023,2020)

// let y = 20;
// function test(testy) {
//   testy = testy || 's'
//   console.log(testy)
// }
// test() // s
// test('') // s
// test(undefined) // s
// test(null) // s
// test("ibrahim") // ibrahim
// test(true) // true
// console.log("*".repeat(20))
// function test2(testy) {
//   testy = testy && executor()
//   console.log(testy)
// }
// function executor() {
//   console.log("first code")
//   console.log("second code")
//   console.log("third code")
//   return 'kemo'
// }
// function executor1() {
//   console.log("first code")
//   console.log("second code")
//   console.log("third code")
// }
// test2() // undefined
// test2('') //
// test2(undefined) // undefined
// test2(null) // null
// test2("ibrahim") // 'kemo'
// test2(true) // 'kemo'

// function showDetails(a,b,c){
//     console.log(`Hello ${typeof a==="string"?a:typeof b==="string"?b:c}, Your Age Is ${typeof a==="number"?a:typeof b==="number"?b:c}, You Are ${a===true||b===true||c===true?"":"Not"} Avaliable For Hire`)
// }
// showDetails(38,"Osama",true)
// showDetails(true,38,"Osama")
// showDetails("Osama",38,true)
// showDetails(false,"Osama",38)

// let x = 10;
// let y = 20;
// let temp = y; // 20
// y = x; // 10
// x = temp // 20

// let stash;
// // default a string, b number, c boolean
// // params (a=5,c=true,b='kemo')
// // params (a=true,c=5,b='kemo')
// if(typeof b === 'string') {
//   stash = a; // true
//   a = b; // 'kemo'
//   b = stash; // true
// }

// if(typeof b === 'number') {
//   // swap b (boolean) with c(5)
//   stash = c; // 5
//   c = b; // boolean
//   b = stash; // 5

// }

// function sayHello(theName, theGender) {
//   theGender==="Male"?console.log(`Hello Mr ${theName}`):theGender==="Female"?console.log(`Hello Miss ${theName}`):console.log(`Hello ${theName}`)
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// function calculate(firstNum, secondNum, operation) {
//   if(secondNum===undefined && operation===undefined){
//     console.log("Second Number Not Found")
//   }
//   else if (operation===undefined || operation==="add"){
//     console.log(firstNum+secondNum)
//   }
//   else if(operation==="subtract"){
//     console.log(firstNum-secondNum)
//   }
//   else if(operation==="multiply"){
//     console.log(firstNum*secondNum)
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// function ageInTime(theAge) {
//   if (theAge < 10 || theAge > 100) {
//     console.log("Age Out Of Range");
//   } else {
//     let ageInMonths = theAge * 12,
//       ageInWeeks = ageInMonths * 4.345,
//       ageInDays = ageInWeeks * 7,
//       ageInHours = ageInDays * 24,
//       ageInMintues = ageInHours * 60;
//     const ageList = [
//       ageInMonths,
//       ageInWeeks,
//       ageInDays,
//       ageInHours,
//       ageInMintues,
//     ];
//     const durationList = ["Months", "Weeks", "Days", "Hours", "Mintues"];
//     for (let i = 0; i < ageList.length; i++) {
//       console.log(`Your Age in ${durationList[i]} ${ageList[i]}`);
//     }
//   }
// }
// // Needed Output
// // ageInTime(110); // Age Out Of Range
// ageInTime(22); // Months Example => 456 Months

// let x = 10;
// x = 20;
// console.log(x); // 20

// const y = 10;
// console.log(y); // x

// const arr = [1, 2, 3, 4, 5]; // 0x012
// arr.splice(0, 1);
// console.log(arr); // reference type
// // object, string, array
// const arr2 = [1, 2, 3, 4, 5]; // 0x015

// console.log("*".repeat(20));
// let number = 20;
// /*
//   Primitives [ undefined, string,bool,number]
//   لما بييجو بيتباصو للدالة بيتبعتو كنسخة
// */
// function test2(x) {
//   x++;
//   console.log(x);
// }
// test2(number); // 21
// console.log(number); // 20
// /*
//   Reference Type [ Object, Array,Function,collection]
//  لما بييجو بيتبعتو للدالة بيتبعتو كريفرنس (ادريس عنوان)
// */
// function test1(arr) {
//   arr.splice(0, 1);
//   console.log(arr);
// }
// let newArr = [1, 2, 3, 4, 5];
// // let newArr = 0x0126
// newArr = [];
// // newArr = 0x01211
// test1(newArr); // [2,3,4,5]
// console.log(newArr); // [2,3,4,5]

// let ArrList = [1, 2, 3, 4, 5]; // 0x12
// let z = ArrList; // 0x12
// let w = z; // 0x12

// function createSelectBox(startYear, endYear) {
//   document.write("<select>");
//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option value="${i}">${i}</option>`);
//   }
//   document.write("</select>");
// }
// createSelectBox(2000, 2021);
// {
/* <select>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>; */
// console.log("*".repeat(15));
// function multiply(...nums) {
//   let result = 1;
//   let flag = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] === "number") {
//       flag = true;
//       result = result * Math.trunc(nums[i]);
//     }
//   }
//   return flag ? result : "all string";
// }
// console.log(multiply(10, 20, 30, 5000)); // 200   [10,20,30]
// console.log(multiply("A", 10, 30)); // 300
// console.log(multiply(100.5, 10, "B")); // 1000
// console.log(multiply("sqwewqe", "QWe", "B")); // all string
// var sayHello = "hi";
// function userInfo(fName, lName) {
//   let sayHello = "Hello";

//   function msgConcat() {
//     function fullName() {
//       return `${fName} ${lName}`;
//     }

//     return `${sayHello} ${fullName()}`;
//   }

//   return msgConcat();
// }
// console.log(userInfo("ahmed", "kamal"));

// let print = (num1, num2) => num1 + num2;
// console.log(print(100, 20));

// function addClass() {
//   // add class part

//   return function addClassToggler() {};
// }
// let x = 10;
// let y = [];

// const z = function () {
//   console.log("das");
// };
// console.log(typeof z); // function

// function test(callback) {
//   if (true) {
//     callback();
//   }
// }
// test(wwwwww);
// function s() {
//   console.log("im the s function");
// }
// function wwwwww() {
//   console.log("im the s function");
// }

// function hey() {
//   var say = "saysay";
//   function me() {
//     console.log(say);
//   }
//   me();
// }
// hey();

// let names = function (...uNames) {
//   //parameter
//   return `String [${uNames.join("],[")}] => Done !`;
// };
// console.log(names("ali", "ahmed", "mohamed"));

// let namesArrow = (...uNames) => `String [${uNames.join("],[")}] => Done !`;

// console.log(namesArrow("ahmed", "amoadg"));
// // console.log(names1); // cannot access variable before initialization
// let names1 = (...uNames) => `String [${uNames.join("],[")}] => Done !`;

// let myNumbers = [20, 50, 10, 60];
// // let calc = (one, two, ...nums) => one + two + +nums;
// // console.log(calc(10, myNumbers[+false], myNumbers[+true]));

// let calc = function (one, two, ...nums) {
//   return one + two + +nums;
// };
// console.log(calc(10, myNumbers[+false], myNumbers[+true]));

// let v = "ahmed 10 kamal";
// console.log(parseInt("asm10gag"));

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     return `${zName.slice(0, zName.indexOf(" ") + 1)}${zName[
//       zName.indexOf(" ") + 1
//     ].toUpperCase()}.`;
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//   }

//   function ageWithMessage(zAge) {
//     return `Your Age Is ${parseInt(`${zAge}`)}`;
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//   }

//   function countryTwoLetters(zCountry) {
//     return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }

//   function fullDetails() {
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(
//       zAge
//     )}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// let checker = (zName) => (status) => (salary) =>
//   status === "Available"
//     ? `${zName}, My Salary Is ${salary}`
//     : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// const multiply = (x, y) => x * y;

// const curriedMultiply = (x) => (y) => x * y;

// console.log(multiply(2, 3));
// console.log(curriedMultiply(2));
// console.log(curriedMultiply(2)(3));

// // // Partially applied functions are a common of use currying

// const newF = curriedMultiply(5);
// console.log(newF);
// console.log(newF(10));
// function specialMix(...data) {
//   let result = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (!isNaN(parseInt(data[i]))) {
//       result += parseInt(data[i]);
//     }
//   }
//   if (result === 0) {
//     return "All Is Strings"; // he was returning 0 so i will tell him return "All Is Strings"
//   }
//   return result;
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix(0, 0, 0)); // 0
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
// search closure

// function everyFunction(arr, callback) {
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       flag = true;
//     } else {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }
// console.log(everyFunction([1, 2, 3, 4, 5], (element) => element));

// const arr = [1, "d", 3, "d", 5];
// const functios = (element, i, arr) => {
//   if (typeof element === "string") {
//     return "mama";
//   } else {
//     return "ptata";
//   }
// };
// let myfun = arr.map((element, i, arr) => {
//   if (typeof element === "string") {
//     return "mama";
//   } else {
//     return "ptata";
//   }
// });
// console.log(myfun);

// // task create your own map function

// const myArr = [1, 2, 3, 4, 5];

// let newArr = myArr.map(job);

// console.log(newArr);
// function job(myValue) {
//   return myValue + myValue;
// }

// let swappingCase = "elZERo";
// let myName = "ahmedKamalMahmoud";
// let invertedNumbers = [1, -10, -20, 15, 20, 100, -30];
// let inv = invertedNumbers.map((a) => -a);
// console.log(inv);
// let sw = swappingCase
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");
// console.log(sw);

// let ignoreBooleans = "Elz123er4o";

// let ign = ignoreBooleans
//   .split("")
//   .map((p) => (isNaN(p) ? p : ""))
//   .join("");
// console.log(ign);

// let myName = "ahmedKamalMahmoud";

// let filterdName = myName
//   .split("")
//   .filter((a) => a.includes("a"))
//   .join("");
// console.log(filterdName);

// let mix = "A13BS2ZX";

// let mixFilter = mix
//   .split("")
//   .filter((ele) => !isNaN(parseInt(ele)))
//   .map(function (a) {
//     return Number(a) + Number(a);
//   })
//   .join("");
// console.log(mixFilter);

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
// let removeChars = ["E", "@", "L", "@", "Z", "@", "E", "@", "R", "@", "O"];

// let wordReduce = theBiggest.reduce(function (acc, curr) {
//   return acc.length > curr.length ? acc : curr;
// });

// console.log(wordReduce);

// let charRemov = removeChars
//   .filter(function (char) {
//     return !char.startsWith("@");
//   })
//   .join("");
// console.log(charRemov);

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArr = myArray
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   })
//   .split(",")
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   });
// console.log(newArr);
// // Elzero

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let numsFillter = numsAndStrings
//   .filter((a) => !isNaN(parseInt(a)))
//   .map((a) => -a);

// console.log(numsFillter);
// // [-1, -10, 10, 20, -5, -3]

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let finalValue = nums.reduce(function (acc, curr) {
//   return curr % 2 === 0 ? acc * curr : acc + curr;
// }, 1);

// console.log(finalValue);
// // 500

// let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//   .split(",")
//   .filter((a) => isNaN(a))
//   .join("")
//   .split("_")
//   .join(" ")
//   .split("")
//   .filter(function (a, b) {
//     return a === b ? a : b;
//   })
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   })
//   .slice(-myString.length, -true);
// console.log(solution);

// // .split("_", true)

// let user = {
//   //Properties
//   name: "Ahmed",
//   age: 38,
//   skills: ["html", "css", "js"],
//   available: false,
//   addresses: {
//     ksa: "riyadh",
//     egypt: {
//       one: "cairo",
//       two: "giza",
//     },
//   },
//   //Methods
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"]["egypt"]["one"]);
// console.log(user.checkAv());

// let User = new Object({
//   age: 22,
// });
// console.log(User);

// User.age = 38;
// User["country"] = "Egypt";
// console.log(User);
// User.sayHello = function () {
//   return `Hello`;
// };
// console.log(User.sayHello());

// console.log(this);
// console.log(this === window);

// myVar = 100;
// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);
// console.log(this);
// console.log(user);
// let ma = Object.create(user);
// console.log(ma);

// // Create Your Object Here
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
//   },
// };
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// // Method One
// // Create Your Object Here
// let objMethodOne = {
//   property: "Method One",
// };

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let objMethodTwo = new Object({
//   property: "Method Two",
// });

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// let objMethodThree = Object.create(objMethodTwo);
// objMethodTwo.age = 20;
// objMethodTwo.name = "agfa";
// objMethodTwo.n = "agfa";

// console.log(objMethodThree); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({ property: "Method Four" });
// console.log(objMethodFour.property); // "Method Four"

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject = Object.assign(twoNums, threeNums, { a });

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */

// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// console.log(objectLength);

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(
//     `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
//   );
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
//     console.log("- Game Has Releases");
//     console.log(
//       `First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].one}`
//     );
//     console.log(
//       `Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].two}`
//     );
//     console.log(
//       `Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].three}`
//     );
//   }
//   console.log("#".repeat(20));
// }

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElements = document.getElementsByClassName("Span");
// let myQueryElement = document.querySelector(".special");
// console.log(myIdElement);
// console.log(myTagElements[0]);
// console.log(myClassElements);
// console.log(myQueryElement);
// myTagElements[0].innerHTML = "Test";

// for (let i = 1; i <= 100; i++) {
//   let myElement = document.createElement("div");
//   let myHeading = document.createElement("h3");
//   let paragraph = document.createElement("p");
//   let myHeadingTitle = document.createTextNode(`My Product ${i}`);
//   let myParagraphTitle = document.createTextNode(`Product Description ${i}`);
//   myElement.appendChild(myHeading);
//   myElement.appendChild(paragraph);
//   myHeading.appendChild(myHeadingTitle);
//   paragraph.appendChild(myParagraphTitle);
//   myElement.className = "product";
//   document.body.appendChild(myElement);
// }

// let myAttr = document.createAttribute("data-custom-ske");
// myElement.setAttributeNode(myAttr);
// myElement.className = "product";
// myElement.innerHTML = "my Div";
// // myElement.dataset.customSke = "data";
// // myElement.setAttribute("data-custom-ske", "mata");
// document.body.appendChild(myElement);
// myElement.dataset
// myElement.id
// myElement.className
// myElement.src
// myElement.alt
// let myBtn = document.getElementById("btn");
// myBtn.onclick = function () {
//   console.log("Clicked");
// };

// window.onscroll = function () {
//   console.log("scroll");
// };

// console.log(document.querySelector(".element"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector("div"));
// console.log(document.querySelector("[name='js']"));
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll("[class ='element']")[0]);
// console.log(document.querySelectorAll("[name='js']")[0]);
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByName("js")[0]);
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[1]);

// let myImg = document.querySelectorAll("img");
// for (let i = 0; i < myImg.length; i++) {
//   myImg[i].alt = "Elzero Logo";
//   myImg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// }
// console.log(myImg);

// console.log((myResult.nodeValue = textNode));
// let myInput = document.getElementsByName("dollar")[0];
// // let textNode = document.createTextNode(`${a}`);
// let myResult = document.getElementsByClassName("result")[0];
// // myResult.textContent = textNode;
// const inputHandler = (event) => {
//   console.log(event);
//   myResult.textContent = `{${myInput.value}} USD Dollar = {${toEgyptianPound(
//     myInput.value
//   ).toFixed(2)}} Egyptian Pound`;
//   console.log(myInput.value);
// };

// /*
//   internally
//   ==> user input ==> inputHandler(e)
// */
// myInput.oninput = inputHandler;
// // console.log(myInput);
// function toEgyptianPound(dollar) {
//   return dollar * 15;
// }

// let myElement = document.querySelectorAll("div");
// myElement[0].title = "one";
// myElement[0].innerHTML = "one";
// myElement[1].title = "two";
// myElement[1].innerHTML = `two ${myElement.length}`;

// let myElement = document.querySelectorAll("img");
// for (let i = 0; i < myElement.length; i++) {
//   if (myElement[i].hasAttribute("alt")) {
//     myElement[i].alt = "Old";
//   } else {
//     myElement[i].alt = "Elzero New";
//   }
// }

// console.log(myElement);

// Elements Number Input One
// Elements Name  Value

// let myNumberElement = document.querySelector("[type = number]");
// let textElement = document.querySelector("[type=text]");
// let elementType = document.querySelector("[name=type]");
// let mybtn = document.querySelector(".my-btn");
// let myResult = document.querySelector("[class = results]");
// mybtn.onclick = function (e) {
//   e.preventDefault();
//   for (let i = 0; i < myNumberElement.value; i++) {
//     let newElement = document.createElement(`${elementType.value}`);
//     newElement.innerHTML = `${textElement.value}`;
//     myResult.appendChild(newElement);
//   }
// };

// let element = document.getElementById("my-div");
// element.prepend(" hello");
// console.log(element.classList);
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("0"));
// console.log(typeof element.classList);

// element.onclick = function () {
//   element.classList.toggle("one", false);
// };
// let addInput = document.querySelector(".classes-to-add");
// let resultElement = document.querySelector(".results");

// window.onload = function () {
//   addInput.focus();
// };
// // ADD INPUT
// addInput.onblur = function () {
//   if (addInput.value.trim() === "") {
//     resultElement.innerHTML = "No Classes To Show";
//   } else {
//     if (resultElement.innerHTML === "No Classes To Show") {
//       resultElement.innerHTML = "";
//     }
//     const classListItems = addInput.value.trim().split(" ").sort(); //["ahmed", "kamal", "mahmoud"]
//     if (resultElement.innerHTML === "") {
//       classListItems.forEach((classItem) => {
//         let mySpan = document.createElement("span");
//         mySpan.innerHTML = classItem.toLowerCase();
//         resultElement.append(mySpan);
//       });
//     } else {
//       let spansElements = Array.from(resultElement.children);
//       spansElements.forEach((spanElement) => {
//         // check if the classlistitems array includes  (text) inside the span element   <span>text</span>
//         if (classListItems.includes(spanElement.textContent)) {
//           // remove that classItem from my classlist items
//           classListItems.splice(
//             classListItems.indexOf(spanElement.textContent),
//             1
//           );
//         }
//       });
//       classListItems.forEach((classItem) => {
//         let mySpan = document.createElement("span");
//         mySpan.innerHTML = classItem.toLowerCase();
//         resultElement.append(mySpan);
//       });
//     }
//   }
// };
// // Remove Elements
// let removeElement = document.querySelector(".classes-to-remove");
// removeElement.addEventListener("blur", function () {
//   let spansElements = Array.from(resultElement.children);
//   this.value
//     .trim()
//     .split(" ")
//     .forEach((classToRemove) => {
//       spansElements.forEach((spanElement) => {
//         if (classToRemove.toLowerCase() === spanElement.textContent) {
//           spanElement.remove();
//         }
//       });
//     });
// });

// removeElement.value.forEach(function(e){

// })

// console.log(removeElement.value);

// let theElement = document.querySelector(".our-element");
// theElement.nextElementSibling.remove();

// let startDiv = document.createElement("div");
// startDiv.className = "start";
// startDiv.title = "Start Element";
// startDiv.dataset.value = "Start";
// startDiv.innerHTML = "Start";
// theElement.before(startDiv);

// let endDiv = document.createElement("div");
// endDiv.className = "end";
// endDiv.title = "end Element";
// endDiv.dataset.value = "end";
// endDiv.innerHTML = "end";
// theElement.after(endDiv);
// let divElement = document.querySelector("div");
// console.log(
//   divElement.childNodes[divElement.childNodes.length - 1].textContent.trim()
// );
// console.log(document);
// let startDiv = document.createElement("div");
// startDiv.className = "start";
// startDiv.title = "Start Element";
// startDiv.dataset.value = "Start";
// startDiv.textContent = "test";
// document.body.append(startDiv);
// document.addEventListener("click", (e) => {
//   console.log(`This is Element Type ${e.target.tagName}`);
// });
// document.body.style.cssText = " margin : 0px";
// // Header
// let header = document.createElement("header");

// header.className = "Header-Content";
// let logo = document.createElement("span");
// logo.className = "logoText";
// let nav = document.createElement("nav");
// nav.className = "navElement";
// nav.style.cssText =
//   "width:30% ; display:flex ; align-items : center ; justify-content : flex-end";
// document.body.append(header);
// header.style.cssText =
//   "padding : 15px; display: flex; align-items : center; justify-content : space-between";
// logo.innerHTML = "elzero";
// logo.style.cssText =
//   "text-transform : Capitalize ; font-weight:800 ; font-size :25px ; color : #24ae72";
// document.querySelector(".Header-Content").append(logo);
// document.querySelector(".Header-Content").append(nav);
// let links_Text = ["home", "about", "service", "contact"];

// links_Text.forEach(function (ele) {
//   let anchor = document.createElement("a");
//   anchor.href = "#";
//   anchor.innerHTML = ele;
//   anchor.style.cssText =
//     "text-decoration : none ; padding : 15px; text-transform : capitalize; font-size: 18px ; color:gray";
//   document.querySelector(".navElement").append(anchor);
// });

// // Content

// let Container = document.createElement("div");
// Container.className = "elementsContainer";
// Container.style.cssText =
//   "padding : 15px ; background-color : #80808030 ; display : grid ; grid-template-columns : repeat(auto-fill,minmax(300px,1fr)); gap :20px";
// document.body.append(Container);

// // Cards
// for (let i = 1; i <= 15; i++) {
//   let card = document.createElement("div");
//   let numbers = document.createElement("span");
//   numbers.style.cssText = "font-size : 30px; font-weight : bold";

//   let product = document.createElement("span");
//   product.style.cssText = "color : gray ; text-transform : capitalize";
//   product.innerHTML = "product";
//   numbers.innerHTML = i;
//   card.className = "card-content";
//   card.style.cssText =
//     "background-color:white ; display:flex ;padding : 95px ; flex-direction : column ; justify-content : center ; align-items : center ; gap : 10px";
//   card.append(numbers, product);
//   document.querySelector(".elementsContainer").append(card);
// }

// // Footer

// let footer = document.createElement("footer");
// footer.innerHTML = "copyright 2021";
// footer.style.cssText =
//   "background-color: #197c4b; padding:14px ; text-align : center ; font-size : 30px ; text-transform: capitalize ; color : white";
// document.body.append(footer);

// setTimeout(sayMsg, 3000, "osama", 30);

let btn = document.querySelector("button");
let video = document.querySelector(".vid");
btn.onclick = function () {
  document.querySelector("button").style.cssText = "display : none";
  document.querySelector(".vid").style.cssText = "display : block";
  document.querySelector(".vid").play();
};
