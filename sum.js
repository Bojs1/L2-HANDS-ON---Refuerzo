function addNumbers(a, b) {  // Function name is "addNumbers" (capital N)
    return a + b;
}

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

let sum = addNumbers(num1, num2);  // Function name must match exactly
alert("The sum is: " + sum);
