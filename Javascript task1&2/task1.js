// 1. Greetings 
let userName = prompt("Please enter your name:");

// Display a greeting message
alert("Hello " + userName + "! Hope you are having a great day.");


// 2. Check Even or Odd 

let numberToCheck = Number(prompt("Enter a number to see if it is Even or Odd:"));

// Determine whether the number is even or odd
if (numberToCheck % 2 === 0) {
    alert(numberToCheck + " is an Even number.");
} else {
    alert(numberToCheck + " is an Odd number.");
}


// 3. Basic Calculator

let num1 = Number(prompt("Calculator: Enter the first number:"));
let num2 = Number(prompt("Calculator: Enter the second number:"));

let operation = prompt("Choose an operation: +, -, *, /");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * n2;
} else if (operation === "/") {
    if (num2 === 0) {
        result = "Error (Cannot divide by zero)";
    } else {
        result = num1 / num2;
    }
} else {
    result = "Invalid Operation";
}

alert("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);

