function changeSize(){
    if(innerWidth >= 1024){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
        document.getElementById('burguer').src = 'imagens/menu.png';
    }else{
        itens.style.display = 'block'
        document.getElementById('burguer').src = 'imagens/close.png';
    }
}