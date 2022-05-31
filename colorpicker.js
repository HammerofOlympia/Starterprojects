const button=document.querySelector("button");
const h1 =document.querySelector ("h1");
const h2=document.querySelector("h2");
button.addEventListener("click",()=>{
  const newColor=randomColor();
  document.body.style.backgroundColor=newColor;
  h1.innerText=newColor;
  h2.innerText=newColor;
})

const randomColor=()=>{
  const r=Math.floor(Math.random()*255);
  const g=Math.floor(Math.random()*255);
  const b=Math.floor(Math.random()*255);
  if (r+g+b <200){
    h1.style.color= "white";
 }else{
   h1.style.color="black";

 
  
 } 
return `rgb(${r},${g},${b})`;
 
};








