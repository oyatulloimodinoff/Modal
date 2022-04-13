const showBtn = document.querySelector('.show-btn')

const modal = document.querySelector('.modal')

const closeBtn = document.querySelector('.close-btn')

const overlay = document.querySelector('.overlay')


const hiddenFunction = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}



showBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

}) 
closeBtn.addEventListener('click', () => {
    hiddenFunction()
    // modal.classList.add('hidden')
    // overlay.classList.add('hidden')

}) 
overlay.addEventListener('click', () => {
    hiddenFunction()
    // modal.classList.add('hidden')
    // overlay.classList.add('hidden')

}) 
document.addEventListener ('keydown', (e) => {
    if (e.code == 'Escape') {
        hiddenFunction()
        // modal.classList.add('hidden')
        // overlay.classList.add('hidden')
    }
})


