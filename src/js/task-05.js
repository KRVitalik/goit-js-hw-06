const outputName = document.querySelector('span#name-output')
const inputName = document.querySelector('input#name-input')

inputName.addEventListener('input', () => {
    inputName.value === ''
        ? outputName.textContent = 'Anonymous'
        : outputName.textContent = inputName.value

});