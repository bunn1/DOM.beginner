// DOM Manipulation


// GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// GelElementByClassName()

// const listItem1 = document.getElementsByClassName("list-items");
// console.log(listItem1)

// GetElementsByTagName()
// const listItems = document.getElementsByTagName("li");
// console.log(listItems)

// querySelector
// const container = document.querySelector("div");
// console.log(container)

// querySelectorAll
// const container1= document.querySelectorAll("div");
// console.log(container1)

// Styling Elements
// const title = document.querySelector("#main-heading");
// title.style.color ="red";
// console.log(title);


// Style all listItems ---------------------------------------------------------------------------
// const listItems = document.querySelectorAll(".list-items");
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color ="blue";
// }
// console.log(listItems);

// Creating Elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements ---------------------------
ul.append(li);
li.innerText = "X-men";

// Modifying the text ------------------------
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// Modifying Attributes and Classes --------------------------
// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");
// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id"))

li.classList.add("list-items");
li.classList.remove("list-items");