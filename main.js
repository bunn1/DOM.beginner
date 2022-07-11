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
const listItems = document.querySelectorAll("list-items");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color ="blue";
}
console.log(listItems);