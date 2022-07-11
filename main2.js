// Event Listener

// element.addEventListener("click", function();

const buttonTwo = document.querySelector('#btn-2');

buttonTwo.addEventListener('click', function (){

alert('I love Css');

});

// MouseOver

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor ="red";
}
newBackgroundColor.addEventListener('mouseover', changeBgColor);

// Hide or Reveal Content

const revealBtn = document.querySelector(".reveal-button");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {

    if (hiddenContent.classList.contains(".reveal-button")
){ 
    hiddenContent.classList.remove(".reveal-button")
     }else{
        hiddenContent.classList.add(".reveal-button")
 }
}








