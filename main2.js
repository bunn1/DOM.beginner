// Event Listener ------------------

// element.addEventListener("click", function();

const buttonTwo = document.querySelector('#btn-2');

buttonTwo.addEventListener('click', function () {

    alert('I love Css');

});


// MouseOver ----------------------------

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = "red";
}
newBackgroundColor.addEventListener('mouseover', changeBgColor);


// Hide or Reveal Content --------------------

const hiddenContent = document.querySelector(".hidden-content");
const revealBtn = document.querySelector(".reveal-button");

revealBtn.addEventListener('click', function handleClick() {
    if (hiddenContent.style.visibility == 'hidden') {
        hiddenContent.style.visibility = "visible";

        revealBtn.textContent = "Hide div ";
    } else {
        hiddenContent.style.visibility = "hidden";
        revealBtn.textContent = "Show div";
    }
})

// Event Probagation 1 Event Capturing 2 Target 3 Event Bubbling

// Nothing on Probagation


// Can copy code underneath several times or use the code on line 61 - 69 

// document.querySelector("#football").addEventListener("click", function (e) {
//     console.log("football is clicked");

//     const target = e.target;

//     if (
//         target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// })


// Event Delegation

document.querySelector("#sports").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id") + " " + "is clicked");

    const target = e.target;

    if (target.matches("li")) {
        target.style.backgroundColor = "ivory";
    }
})

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText ="rugby";
newSport.setAttribute("id", "rugby");
sports.appendChild(newSport)