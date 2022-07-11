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
    }else{
        hiddenContent.style.visibility = "hidden";
        revealBtn.textContent ="Show div";
    }
})




