let btn = document.querySelector('.btn')
let btn2 = document.querySelector ('.menu-nav')

function handleScroll(){
  let scrollPageY = window.scrollY;
   if(scrollPageY >= 30)    {
     btn2.style.visibility = 'hidden'
     btn.style.display = 'block'
   }
     else 
     {
       btn.style.display = 'none'
       btn2.style.visibility = 'visible'

      }

  }  
  window.addEventListener('scroll', handleScroll)

