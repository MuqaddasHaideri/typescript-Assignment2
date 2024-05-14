//Assign a function expression to a variable, with one parameter that outputs the provided 
//argument to the console. 
const functionVariable= function(variable:any) {
    console.log(variable);
};
//Pass an argument into the function. 
functionVariable("this is a variable function");

//Pass an argument into the function. 
function sameFunction (variable:any){
    console.log(variable);
}
sameFunction ("this is a normal function");