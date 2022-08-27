function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
} 

function mudoTamanho() {
    if (window.innerWidth >= 758) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}