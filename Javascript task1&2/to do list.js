
let todoList = [];

function addTask(task) {
    todoList.push(task); 
    console.log(`Added: "${task}"`);
}

// 3. Deleting Task
function deleteTask(index) {
    if (index >= 0 && index < todoList.length) {
        let removedTask = todoList.splice(index, 1); 
        console.log(`Deleted index ${index}: "${removedTask}"`);
    } else {
        console.log("Error: Invalid index.");
    }
}

// 4. Displaying all tasks
function listTasks() {
    console.log("To-Do List:", todoList);
}

//FOR EXAMPLE 

addTask("Study JavaScript");      
addTask("Do Data communication project");           

listTasks();                      

deleteTask(0);                    

listTasks();                      
