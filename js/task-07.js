const getEl = (x) => document.querySelector(x);
const inputEl = getEl('#font-size-control');
let spanText = getEl('#text');

inputEl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    return spanText.style.fontSize = event.currentTarget.value + "px";  
});