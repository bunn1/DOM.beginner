// Variables

let openBtn = document.querySelector("#open-btn");
let closeBtn = document.querySelector("#close-btn");

let modalContainer = document.querySelector("#modal-container");
// let modal = document.querySelector("#modal");

// Event Listeners

openBtn.addEventListener("click", function (){
    // modalContainer.style.visibility = "hidden"
    
    modalContainer.style.display = "block";
})

closeBtn.addEventListener("click", function (){
    modalContainer.style.display = "none"
})

window.addEventListener("click", function (e){
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
    }
})