const navigation = document.querySelector('#menu')
const menu = document.querySelector('#menu')
const themeChange =document.querySelector('#theme')


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


const lightbox1 = document.createElement('div');
lightbox1.id = "lightbox1"
document.body.appendChild(lightbox1);


const myUi= document.querySelectorAll('.ui');
  myUi.forEach(Ui =>{
      Ui.addEventListener('click', e =>{
          lightbox1.classList.add('active1')
          const img1 = document.createElement('img')
          img1.src = Ui.src
          while(lightbox1.firstChild){
              lightbox1.removeChild(lightbox1.firstChild)
          }
          lightbox1.appendChild(img1);

       
      })
  })


lightbox1.addEventListener('click',e =>{
    if(e.target !== e.currentTarget)return
    lightbox1.classList.remove('active1')
})