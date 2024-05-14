
//Set up two different variables with different values.

let num1 = 10;
let num2 = 20;
// Call a function with these variables as arguments and output the result using console.log.
function MultiplyNumbers(var1:number, var2:number) {
        console.log("The product of number "+var1+ " and " +var2+ "is : "+(var1*var2));
    }

MultiplyNumbers(num1,num2);
// Create a second call to the function with two more numbers as arguments.
let num3 = 40;
let num4= 15;
MultiplyNumbers(num3,num4);


