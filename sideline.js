let menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

// Expandir Menu

let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', () => {
    menuSide.classList.toggle('expandir')
})