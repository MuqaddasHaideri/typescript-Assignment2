//Set up two variables containing number values.
var number1 = 14;
var number2 = 7;
// Set up a variable to hold an operator (+ or -). 
// Create a function that takes two numbers and an operator as parameters, performs the 
//corresponding operation, and returns the result.
function performOperation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            return "Invalid operator";
    }
}
// Call the function with the variables and operator, and output the result using console.log. 
var operator = '+';
var result1 = performOperation(number1, number2, operator);
console.log("The addition of number1 " + number1 + " and " + number2 + " is " + result1);
// Update the operator value and call the function again with the updated arguments.
operator = '-';
var result2 = performOperation(number1, number2, operator);
console.log("The subtraction of number1 " + number1 + " and " + number2 + " is " + result2);
