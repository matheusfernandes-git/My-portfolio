function changeSize(){
    if(innerWidth >= 1024){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}

const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
    if(window.scrollY == 0){
        btnTop.classList.remove('visible');
    }else{
        btnTop.classList.add('visible');
    }
})

function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
        document.getElementById('burguer').src = 'imagens/menu.png';
    }else{
        itens.style.display = 'block'
        document.getElementById('burguer').src = 'imagens/close.png';
    }
}