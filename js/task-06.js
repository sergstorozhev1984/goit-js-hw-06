const getEl = x => document.querySelector(x);
const inputEl = getEl('input');

inputEl.addEventListener('blur', (event) => {
    // console.log(event.target.value.length);
    if (event.target.value.length !== +inputEl.dataset.length) {
        return inputEl.classList.add('invalid');
    }
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
});