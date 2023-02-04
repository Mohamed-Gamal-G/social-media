/* function makeItRed(e) {
    e.target.style.color = "red";
  }
  
  let i = document.querySelector(".fa-solid");
  i.addEventListener("click", makeItRed); */
/*   const btn = document.getElementById('fa-solid');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
}); */
/* const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});
 */
/* document.getElementById('change').onclick = changeColor;   

function changeColor() {
    document.body.style.color = "purple";
    return false;
}   */ 

/*Scrol to up*/
var mybutton = document.getElementById('up');

window.onscroll =function(){
    'use strict';
    if(window.pageYOffset >= 400){

        mybutton.style.display ='block';
    }
        else{
            mybutton.style.display = 'none';
        }
    };
    mybutton.onclick = function(){
        'use strict';
        window.scrollTo(0,0)
    };