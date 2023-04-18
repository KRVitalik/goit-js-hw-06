const btnIncrement = document.querySelector('button[data-action="increment"]')
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const value = document.querySelector('span#value')
let counterValue = 0;

btnIncrement.addEventListener('click', () => {
    counterValue += Number(btnIncrement.textContent[1]);
        value.textContent = counterValue
})

btnDecrement.addEventListener('click', () => {
    counterValue -= Number(btnDecrement.textContent[1]);
       value.textContent = counterValue
})



