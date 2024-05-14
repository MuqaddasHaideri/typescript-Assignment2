 
import inquirer from 'inquirer'


const enteredNum = await inquirer.prompt({
    name: "Num",
    type: "number",
    message: "Enter the first number:"
});

let dynamnicNum= 21;
if (dynamnicNum > enteredNum.Num){
    console.log("The number you have entered is "+enteredNum.Num+" which is LESS than the dynamic number "+dynamnicNum);
}else if(dynamnicNum < enteredNum.Num){
    console.log("The number you have entered is "+enteredNum.Num+" which is GREATER than the dynamic number "+dynamnicNum);
}else{
    console.log("The number you have entered is "+enteredNum.Num+" which is EQUAL to the dynamic number "+dynamnicNum);
}
