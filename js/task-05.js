const getEl = (x) => document.querySelector(x);
const inputEl = getEl('#name-input');
const outputEl = getEl('#name-output');
// console.log(inputEl);

inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value.length === 0) {
         return outputEl.textContent = 'Anonymous';
    }
    outputEl.textContent = event.currentTarget.value;
});
