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









