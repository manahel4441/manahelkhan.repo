const navigation = document.querySelector('#menu')
const menu = document.querySelector('#menu')
const themeChange =document.querySelector('#theme')
const navLinks = document.querySelectorAll('.line')


nav =document.querySelector('nav')



navigation.addEventListener('click',()=>{
    if(navigation.classList.contains('nav-toggle')){
        nav.classList.add('navOpen')
    }
})


menu.addEventListener('click',()=>{
    if(menu.classList.contains('cross')){
        menu.classList.remove('cross')
    }
    else{
        menu.classList.add('cross')
        
    }
})
menu.addEventListener('click',()=>{
    if(menu.classList.contains('cross')){
        nav.classList.remove('slideOut')
    }
    else{
        nav.classList.add('slideOut')
        
    }
})
navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('cross')
        nav.classList.add('slideOut')
        
    })
    
 })
//////////////////////

const lightbox = document.createElement('div');
lightbox.id = "lightbox"
document.body.appendChild(lightbox);


const myImages= document.querySelectorAll('img');
  myImages.forEach(image =>{
      image.addEventListener('click', e =>{
          lightbox.classList.add('active')
          const img = document.createElement('img')
          img.src = image.src
          while(lightbox.firstChild){
              lightbox.removeChild(lightbox.firstChild)
          }
          lightbox.appendChild(img);

       
      })
  })

lightbox.addEventListener('click',e =>{
    if(e.target !== e.currentTarget)return
    lightbox.classList.remove('active')
})

//////////////



//////////////////////

