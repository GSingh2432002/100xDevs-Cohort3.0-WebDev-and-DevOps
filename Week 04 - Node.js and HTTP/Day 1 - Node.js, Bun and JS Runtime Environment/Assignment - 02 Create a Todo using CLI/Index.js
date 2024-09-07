/*
Assignments #2 - Create a cli that lets a user
                1. Add a todo
                2. Delete a todo
                3. Mark a todo as done

1. Add a Todo: To add a new item in todo, use the add command followed by the deadline and the todo title:
    $ node Index.js and <Todo_Title> <Time>
    $ node Index.js add "Go to gym" "18:00"

2. Remove a Todo: To remove an existing todo item, use the remove command followed by the title and the date of JSON file:
    $ node Index.js remove <Todo_Title> <Data>
    $ node Index.js remove "Go to gym" "2024-09-07"

3. Mark a Todo done: To mark an existing todo item done, use the mark command followed by the title and the date of the JSON file:
    $ node Index.js mark <Todo_Title> <Date>
    $ node Index.js mark "Go to gym" "2024-09-07"
*/

// Path to the todos.json file
const todosFilePath = path.join(__dirname, "todos.json");

// Helper function to read the todos from the file
function readTodos(){
    if(!fs.existsSync(todosFilePath)){
        return [];
    }
    const data = fs.readFileSync(todosFilePath, "utf-8");
    return JSON.parse(data || "[]");
}

// Helper function to write todos to the file
function writeTodos(todos){
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), "utf-8");
}

// Command to add a new todo item
program
    .command("add")
    .description("Add a new todo item")
    .argument("<Todo_Title", "Enter the todo title")
    .argument("<Time>","Enter the finish time")
    .action((todoTitle, time) => {
        const todos = readTodos();

        const newTodo = {
            Title: todoTitle,
            Deadline: time,
            Done: false,
        };

        todos.push(newTodo);
        writeTodos(todos);

        console.log("Todo added successfully");
    });

// Command to remove todo item
program
    .command("remove")
    .description("Remove an existing todo item")
    .argument("<Todo_Title>", "Enter the todo title to delete")
    .action((todoTitle) => {
        let todos = readTodos();
        const updatedTodos = todos.filter((todo) => todo.Title !== todoTitle);

        if(todos.length === updatedTodos.length){
            console.log("Todo not found");            
        }else{
            writeTodos(updatedTodos);
            console.log("Todos removed successfully");            
        }
    });

// Command to mark a todo item as done
program
    .command("mark")
    .description("Mark a todo item as done")
    .argument("<Todo_Title>", "Enter the todo title to mark as done")
    .action((todoTitle) => {
        let todos = readTodos();
        let todoFound = false;
        
        todos = todos.mao((todo) => {
            if(todo.Title === todoTitle){
                todo.Done = true;
                todoFound = true;
            }
            return todo;
        });
        if (todoFound){
            writeTodos(todos);
            console.log("Todo marked as done");            
        }else{
            console.log("Todo not found");            
        }
    });
// Parse and execute the commands
program.parse();