// on mouseclick event to translate all buttons off the page and possibly use a opacity fade effect to bring in the new one
const buttons=document.querySelectorAll(".buttons");


    buttons.forEach(span => {
        buttons.addEventListener("click",(ev)=>{
        buttons.classList.toggle("pageTransition");
    }) 
        
});   