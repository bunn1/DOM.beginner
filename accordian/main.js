// Variable

let accordian = document.getElementsByClassName('content-container');

// Access info in container - for loop
for (let i = 0; i < accordian.length; i++) {

//   Reference point all content-container / toggle = toggle 
//   adding or removing a classname with the method active
    accordian[i].addEventListener('click', function() {
        this.classList.toggle("active");
    })
}

