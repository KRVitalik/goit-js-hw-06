const inputBlur = document.querySelector('#validation-input');
const inputLength = Number(inputBlur.getAttribute('data-length'));

inputBlur.addEventListener('blur', (onInputBlur))

function onInputBlur() {
    if (inputLength === inputBlur.value.length) {
        inputBlur.classList.remove('invalid');
        inputBlur.classList.add('valid');
    } else if (inputBlur.value.length === 0) { 
        inputBlur.classList.remove('valid');
        inputBlur.classList.remove('invalid');
    }else{
        inputBlur.classList.remove('valid');
        inputBlur.classList.add('invalid');
    }
};