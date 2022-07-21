// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const deleteBtn = document.getElementById("delete-btn");



function fun1() {
    taskContainer.innerHTML = inputTask.value
}
addTask.addEventListener("click", fun1);

function clearContainerField() {

    const el = document.getElementById("task-container");

    for (i = 0; i < el.inputTask.value; i++) {

    }
}

taskContainer.addEventListener("click", () => {
    taskContainer.style.textDecoration = "line-through";
    taskContainer.style.textDecorationThickness = "4px";
    taskContainer.style.textDecorationColor = "green";


    deleteBtn.addEventListener("click", (e) => {
        deleteBtn.remove(e);
        taskContainer.remove(e);

    })
})