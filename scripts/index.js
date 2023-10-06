// let x = prompt("Enter ur name");

// console.log(x);

// alert("увага повітряна тривога");

const grade = 6;

if (grade >= 10) {
  console.log("ти молодець синок");
} else if (grade > 7) {
  console.warn("останнє попередження, краще вчись");
} else {
  console.error("тікай з села");
}

let result2 = "10" + 2; //'10'+'2'='102' 'asd'+'asd'='asdasd'
let result1 = "10" - 2; //10-2=8
let result11 = "asd" - 2; //NAN
const result3 = true + 2; //3
const result4 = true - 2; //-1
const result5 = "true" + 2; //'true2
console.log(result3);

const day = 15;
switch (day) {
  case 1:
    console.log("monday");
    break;

  case 2:
    console.log("tues");
    break;

  case 3:
    console.log("wedn");
    break;

  case 4:
    console.log("thur");
    break;

  case 5:
    console.log("fri");
    break;

  default:
    console.log("якийсь неправильний день");
    break;
}

// console.log( variable);
//possible ages
// const age = 10; // Дитина
// const age = 16; // Підліток
// const age = 25; // Молодий дорослий
// const age = 30; // Дорослий

// < > <= >= == === && || !

// false&&false=false
// false&&true=false
// true&&false=false
// true&&true=true

// false true false
// x && x1 && x2; //false

// false||false=false
// false||true=true
// true||false=true
// true||true=true

// false true false
// x || x1 || x2; //true

// !true=false
// !false=true

const age2 = 15;

// !(age2>15) = age2<15

// const isRegistered = true;

// if(isRegistered){

//     if(age>21){
// sdfsdffds;
//     }else{
//       console.error("шмакадявка, вали ");
//     }
// }else{
//     console.error('ти не зареєстрований, вали ');
// }

// if (!isRegistered) {
//   console.error("ти не зареєстрований, вали ");
// }

// if (!(age > 21)) {
//   console.error("шмакадявка, вали ");
// }

/*
Діти п'ють гарячий солодкий напій, який називається "toddy".
Підлітки п'ють газований напій з назвою "coke".
Молоді дорослі п'ють пиво, але вже без бадьорого ефекту. 
Дорослі п'ють високоякісний алкогольний напій, який називається "whisky".

Діти молодші за 14 років.
Підлітки молодші за 18 років.
Молоді дорослі молодші за 21 рік.
Дорослі від 21 року і старші.
*/

const ageOfUser = 19;
if (ageOfUser <= 14) {
  console.log("toddy");
} else if (ageOfUser <= 18) {
  console.log("coke");
} else if (ageOfUser <= 21) {
  console.log("beer");
} else {
  console.log("whisky");
}

switch (true) {
  case ageOfUser <= 14:
    console.log("toddy");
    break;

  case ageOfUser <= 18:
    console.log("coke");
    break;

  case ageOfUser <= 21:
    console.log("beer");
    break;

  default:
    console.log("whisky");
    break;
}

const name = "Dima";
const greeting = "Hello my name is ";
const ageGreeting = "I am 16 years old";
const fullGreeting = greeting + name + ageGreeting;

const name2 = "Bobr";
const fullGreeting2 = `Hello my name is ${name2}.I am 16 years old`; 

console.log(fullGreeting, fullGreeting2);
