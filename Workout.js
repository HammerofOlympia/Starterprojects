
const landing=document.querySelector(".home");
const buttons=document.querySelectorAll(".buttons");
 const li=document.querySelectorAll("ul li");
 const ul=document.querySelector("ul");
 const weightPlus=document.querySelectorAll(".addWeight");
 const input=document.querySelectorAll(input[type="text"]);

 landing.addEventListener("click",(ev)=>{
     for(let i=0;i<buttons.length;i++){
        buttons[i].classList.add("pageTransitionOff");
      ul.classList.add("pageTransitionOn");
        
     }  
});
 


for(let i=0;i<li.length;i++){
   li[i].addEventListener("click",(e)=> {
    li.forEach(li => {
      li.classList.remove("active")
    }); 
    
    li[i].classList.add("active")
      console.log(li);

     }) ;
   }
weightPlus.forEach(. =>{
  weightPlus.addEventListener("click",(e)=>{
input.value+=2;
})
})
 
  
 
  
  
     

   
 


        

//li probably going to have to loop through with queryselectorAll
//for loop then li[i].addEvent and buttons[i].classlist to target individually
//turn buttons soft blue on click then if reps===desired turn green if not turn red }*/