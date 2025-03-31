// // prompt take input from user
// //let name = prompt("Entre your name: ");

// // function to greet the user, if the name is empty, alert the user to enter a correct name.
// function greeting(input) {
//   if (input.length <= 0) {
//     alert("please enter a correct name: ");
//   }
//   const first_letter = input.charAt(0);
//   const remaining_letter = input.slice(1);
//   const fist_letter_upper = first_letter.toUpperCase();

//   return (
//     fist_letter_upper + remaining_letter + "," + " Welcome to PowerCoders!"
//   );
// }

// //console.log(greeting(name));

// let sum_num = (num1, num2) => {
//   // check if the number is integer or not
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
//     alert("Please enter a correct number: ");
//     return;
//   }
//   return num1 + num2;
// };

// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");

// //console.log(sum_num(num1, num2));

// let isBigger = (num1, num2) => {
//   if (num1 < num2) {
//     console.log(num2 + " is bigger than " + num1);
//     return;
//   }
//   console.log(num1 + " is bigger than " + num2);
// };

// isBigger(num1, num2);

// let subtract = (num1, num2) => {
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
//     alert("Please enter a correct number: ");
//     return;
//   }
//   return num1 - num2;
// };

// let multiply = (num1, num2) => {
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
//     alert("Please enter a correct number: ");
//     return;
//   }
//   return num1 * num2;
// };

// let divide = (num1, num2) => {
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
//     alert("Please enter a correct number: ");
//     return;
//   }
//   return num1 / num2;
// };

// let combine = (num1, num2, operation) => {
//     if (operation === "+") {
//         return sum_num(num1, num2);
//     }

//     else if (operation === "-") {
//         return subtract(num1, num2);
//     }

//     else if (operation === "*") {
//       return multiply(num1, num2);
//     }

//     else if (operation === "/") {
//         return divide(num1, num2);
//     }

//     else {
//         alert("Please enter a correct operation: ");
//     }
// }

// let fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz")
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz")
//         }
//         else {
//             console.log(i)
//         }

//     }
// };

// let find_day = (date) => {
//     let data = "2003-10-20";
//     date_data = date.split("-");
//     let year_no = date_data[0];
//     console.log(year_no);
// }

let date = prompt("Enter a date in the format YYYY-MM-DD: ");
// let date = "2003-10-20"
date_data = date.split("-");
let year_no = date_data[0];
let month_no = date_data[1];
let days = date_data[2];
let total_days = 0;

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function count_days(date) {
  date_data = date.split("-");
  let year_no = date_data[0];
  let month_no = date_data[1];
  let days = date_data[2];
  let total_days = parseInt(days);

  let leap_year = isLeapYear(year_no);

  for (let i = 1; i <= month_no - 1; i++) {
    console.log(i);
    if (leap_year && i === 2) {
      total_days += 29;
    } else if (i === 2) {
      //total_days += 28;
      total_days += 28;
    } else if (
      i === 1 ||
      i === 3 ||
      i === 5 ||
      i === 7 ||
      i === 8 ||
      i === 10 ||
      i === 12
    ) {
      total_days += 31;
    } else {
      total_days += 30;
    }
  }
  return console.log(total_days);
}
