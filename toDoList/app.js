// Variables

const btnAddTask = document.getElementById("btn-task");
const taskContainer = document.getElementById("task-container");
const inputText = document.getElementById("input-text");



function fun1(){
    taskContainer.innerHTML = inputText.value;
}

btnAddTask.addEventListener("click", fun1);
 
 
