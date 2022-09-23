const cards = document.querySelectorAll('button')

cards.forEach( e => {
    e.addEventListener('click', () => {
        document.querySelector('button.selected').classList.remove('selected')
        e.classList.add('selected')
    })
})