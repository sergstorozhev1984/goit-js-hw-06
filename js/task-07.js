const getEl = x => document.querySelector(x);
const inputEl = getEl('#font-size-control');
let spanText = getEl('#text');

inputEl.addEventListener('input', (event) => {
    console.log(event.target.value);
    return spanText.style.fontSize = event.target.value + "px";  
});