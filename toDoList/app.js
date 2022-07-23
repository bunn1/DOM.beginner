let inp = document.getElementById("inp"); // Input field
let but = document.getElementById("but"); // Button Add
let list = document.getElementById("list"); //Getting value of unordered List


but.addEventListener("click", addToDo) // Calls the addToDo() function by click on the Add Btn

inp.addEventListener("keyup",function(event){
    if(event.keyCode === 13)
    {
        addToDo();
    }
})

function addToDo(){
    let value = inp.value;

    if(value === "") // Checks if any string is not resent it will not print

    return;

    let element= document.createElement("li"); // Creating li element

    element.innerText = value; // Giving value of the text into element

    list.appendChild(element); // Appending at end

    element.addEventListener("dbclick", function(){ // Dbclick - delete element
        element.remove("list");
    })

    element.addEventListener("click", function (){ // If you single click on the element it will strike through the element
        element.style.textDecoration = "line-through";
    })

    input.value = ""; // It clears the text box after one entinty

}