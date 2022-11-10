const getEl = (x) => document.querySelector(x);
const inputEl = getEl('input');
const inputDataLength = getEl('[data-length]').dataset.length
// console.dir(inputDataLength);
inputEl.addEventListener('change', (event) => {
    if (event.currentTarget.value.length > inputDataLength) {
        return inputEl.classList.add('invalid');
    }
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
});