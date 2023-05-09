
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-150%';
}

//Top button

const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
    if(window.scrollY == 0){
        btnTop.classList.remove('visible');
    }else{
        btnTop.classList.add('visible');
    }
})

