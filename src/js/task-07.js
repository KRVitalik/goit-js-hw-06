const inputControl = document.querySelector('#font-size-control')
const textForInputControl = document.querySelector('#text')

inputControl.addEventListener('input', (event) => {
    text.style.fontSize = `${event.target.value}px`;
})