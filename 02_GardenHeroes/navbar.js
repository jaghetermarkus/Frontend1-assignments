const navMenu = document.querySelector('.navMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const menuLinks = document.querySelectorAll('.navMenu li')

openMenu.addEventListener('click', showNavMenu);
closeMenu.addEventListener('click', closeNavMenu)

menuLinks.forEach(link => {
    link.addEventListener('click',function(){
        closeNavMenu()
    })
})

function navigateTo(page) {

    closeNavMenu()
    console.log('close');
    
    setTimeout(() => {
        window.location.href = page;
    }, 200); 
}

function closeNavMenu(){
    navMenu.style.top = '-100%'
    console.log('close');
    }  

function showNavMenu(){
    navMenu.style.display = 'flex'
    navMenu.style.top = '0'
}
        

// window.addEventListener('beforeunload', closeNavMenu);