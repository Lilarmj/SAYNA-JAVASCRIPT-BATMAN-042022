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
