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

// Event Delegation

document.querySelector("#football").addEventListener("click", function (e) {
    console.log("football is clicked");

    const target = e.target;

    if (
        target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
})


document.querySelector("#basketball").addEventListener("click", function (e) {
    console.log("basketball is clicked");

    const target = e.target;

    if (
        target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
})


document.querySelector("#boxing").addEventListener("click", function (e) {
    console.log("boxing is clicked");

    const target = e.target;

    if (
        target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
})


document.querySelector("#tennis").addEventListener("click", function (e) {
    console.log("tennis is clicked");

    const target = e.target;

    if (
        target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
})

document.querySelector("#golf").addEventListener("click", function (e) {
    console.log("golf is clicked");

    const target = e.target;

    if (
        target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
})