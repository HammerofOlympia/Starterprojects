//remove spans rather than click event?
const landing=document.querySelector(".home");
const buttons=document.querySelectorAll(".buttons");
const li=document.querySelectorAll("li");
landing.addEventListener("click",(ev)=>{
     for(let i=0;i<buttons.length;i++){
        buttons[i].classList.toggle("pageTransitionOff");
     }  
});
  for (let i=0;i<li.length;i++){
  li[i].addEventListener("click",(e)=>{
      li[i].classList.toggle("active");
  })
   }

        

//li probably going to have to loop through with queryselectorAll
//for loop then li[i].addEvent and buttons[i].classlist to target individually
//turn buttons soft blue on click then if reps===desired turn green if not turn red }*/