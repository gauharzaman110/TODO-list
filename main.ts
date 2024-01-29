import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const answer: {
        TODO: string,
        addMore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: " What do you want to add in you todo ?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todo ?",
            default: false
        }
    ])
    const {addMore, TODO} = answer;
    loop = addMore
    if(TODO){
    todos.push(TODO)
    }else{
        console.log("Kindly add valid input")
    }
}

if(todos.length > 0){
    console.log("Your Todo list: ")
todos.forEach(todo => {
    console.log(todo)
});
}else{
    console.log("No todos Found")
}