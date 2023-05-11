//1
let celsius = +prompt("Enter Celsius");
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);
//----------------------------------------------------------

//2
let a = 4;

let b = 8;

if (b % a === 0 || a % b === 0) {
  console.log(1);
} else {
  console.log(0);
}

// --------------------------------------------------------------
// 3
let monthNumber = 5;
switch (monthNumber) {
  case 1:
    console.log("հունվար");
    break;
  case 2:
    console.log("փետրվար");
    break;
  case 3:
    console.log("Մարտ");
    break;
  case 4:
    console.log("Ապրիլ");
    break;
  case 5:
    console.log("Մայիս");
    break;
  case 6:
    console.log("հունիս");
    break;
  case 7:
    console.log("հուլիս");
    break;
  case 8:
    console.log("օգոստոս");
    break;
  case 9:
    console.log("Սեպտեմբեր");
    break;
  case 10:
    console.log("Հոկտեմբեր");
    break;
  case 11:
    console.log("Նոյեմբեր");
    break;
  case 12:
    console.log("Դեկտեմբեր");
    break;

  default:
    console.log("sxal");
    break;
}

// --------------------------------------------------------

// 4
let a = -6;

let b = -12;

let c = 0;

if (a >= b && a >= c) {
  console.log(a + " is maximum");
} else if (c >= b && c >= a) {
  console.log(c + " is maximum");
} else if (b >= a && b >= c) {
  console.log(b + " is maximum");
}
// -------------------------------------------------------------

// 5
let number = +propmpt("Enter Number");
console.log(Math.abs(number));

// ------------------------------------------

//6
let start = -12;

let end = 9;

let currentNumber = -12;

if (currentNumber > start && currentNumber < end) {
  console.log("in bounds");
} else {
  console.log("out of bounds");
}

