import inquirer from 'inquirer';
const name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter a name:"
});
switch (name.name) {
    case "alya":
        console.log(name.name + " is my friend");
        break;
    case "nawira":
        console.log(name.name + " is my friend");
        break;
    case "hafsa":
        console.log(name.name + " is my friend");
        break;
    default:
        console.log(name.name + " is my friend");
        break;
}
