
const landing=document.querySelector(".home");
const buttons=document.querySelectorAll(".buttons");
 const li=document.querySelectorAll("ul li");
 const ul=document.querySelector("ul");
 const Plus=document.querySelectorAll(".Plus");
 const Minus=document.querySelectorAll(".Minus");

//transition displays
 landing.addEventListener("click",(ev)=>{
     for(let i=0;i<buttons.length;i++){
        buttons[i].classList.add("pageTransitionOff");
       ul.classList.add("pageTransitionOn");
        
     }  
});
 

//toggle active element
for(let i=0;i<li.length;i++){
   li[i].addEventListener("click",(e)=> {
    li.forEach(li => {
      li.classList.remove("active")
    }); 
    
    li[i].classList.add("active")
      console.log(li);

     }) ;
   }


 
  
 
  
  
     

   
 


        


//turn buttons soft blue on click then if reps===desired turn green if not turn red }*/