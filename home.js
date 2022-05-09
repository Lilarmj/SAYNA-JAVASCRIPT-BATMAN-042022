//Diapo citations
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}

//Effet hover sur les rubriques du menu
let menu = document.querySelectorAll('ul li');

menu.forEach(li=> {
  li.addEventListener('mouseover', ()=>{
    li.style.textDecoration = 'underline';
    li.style.fontWeight  = " 800";
  });  
  li.addEventListener('mouseout', ()=>{
    li.style.textDecoration = 'none';
    li.style.fontWeight = 'normal';
  }); 
})

//Effet hover sur les boutons
let btnintro = document.getElementsByClassName(btnintro)

console.log(btnintro);

for (let i=0; i<btnintro.length; i++)(
  btnintro[i].addEventListener("mouseover",()=>{
  btnintro[i].style.backgroundopacity = '1';    
  }),
  btnintro[i].addEventListener("mouseout",()=>{
  btnintro[i].style.backgroundopacity = '0.4';  
  })
)

//Titres avec un "fade in" search jquery cdn ajax.googleapis.com - releases - select jquery minified - copy in html before script js
$(document).ready(function(){
  $(".title").animate({
    left:'30px', 
  }, "slow");
  $(".sousTitre").fadeIn();
})


