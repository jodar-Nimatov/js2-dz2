const Red = document.querySelector('.red')
const Green = document.querySelector('.green')
const Yellow = document.querySelector('.yellow')
const reset = document.querySelector('.reset')
const body = document.body

Red.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = 'red';
    }, 1000)
    console.log('Red');
})

Green.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = 'green';
    }, 1000)
    console.log('green');
})

Yellow.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = 'yellow';
    }, 1000)
    console.log('yellow');
})

reset.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = 'white'
    }, 100)
    console.log('Reset');
})