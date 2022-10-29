let block = document.querySelectorAll('.black')
let big = document.querySelector('.main-block')
block.forEach(elem =>{
    elem.addEventListener('click',() => {
        big.style.backgroundColor = elem.style.backgroundColor
        elem.remove()
    })
})
