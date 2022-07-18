
const landing = document.querySelector(".home");
const buttons = document.querySelectorAll(".buttons");
const li = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");

const Plus = document.querySelectorAll(".data-increase");
const Minus = document.querySelectorAll(".data-decrease");

//transition displays
landing.addEventListener("click", (ev) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("pageTransitionOff");
    ul.classList.add("pageTransitionOn");

  }
});
//buggy currently

//toggle active element
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {

    li.forEach(li => {
      li.classList.remove("active")
    });

    li[i].classList.add("active")
  });
}


function increaseWeight() {
  for (const button of Plus) {
    button.addEventListener("click", function() {
      
        this.closest("div").querySelector("button").disabled=false; 
      let a = parseFloat(this.closest('div').querySelector('input').value) + 2.5;
      
      this.closest('div').querySelector('input').value = a;
   
  })
  }
}
function decreaseWeight() {
  for (const button of Minus) {
    button.addEventListener("click", function() {
      if (this.closest("div").querySelector("input").value >=2.5){
     
        
      let b = parseFloat(this.closest('div').querySelector('input').value) - 2.5;
      
      this.closest('div').querySelector('input').value = b;
      }else{
     
      
      this.closest("div").querySelector("button").disabled=true; 
    
 }
})
 }
}



   
    
    

   
    

    
    
    
  


 
  
 
  
  
     

   
 


        


//turn buttons soft blue on click then if reps===desired turn green if not turn red 