//Set up two different variables with different values.
var num1 = 10;
var num2 = 20;
// Call a function with these variables as arguments and output the result using console.log.
function MultiplyNumbers(var1, var2) {
    console.log("The product of number " + var1 + " and " + var2 + "is : " + (var1 * var2));
}
MultiplyNumbers(num1, num2);
// Create a second call to the function with two more numbers as arguments.
var num3 = 40;
var num4 = 15;
MultiplyNumbers(num3, num4);
