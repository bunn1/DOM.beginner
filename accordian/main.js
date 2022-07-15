// Variable

const accordian = document.getElementsByClassName('.content-container');

// Access info in container - for loop
for ( i = 0; i < accordian.length; i++) {
  console.log(accordian[i]);
    

//   Reference point all content-container / toggle = toggle 
//   between adding or removing a classname with the method active
    accordian[i].addEventListener('click', function() {
        this.classList.toggle('active')

    })

}