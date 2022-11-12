let counterValue = 0;
const count = document.querySelector('#value');

const btnIncrement = document.querySelector('[data-action="increment"]');
const onBtnIncrementClick = () => {
    return count.textContent = counterValue+= 1;
}
btnIncrement.addEventListener("click", onBtnIncrementClick);

const btnDecrement = document.querySelector('[data-action="decrement"]');
const onBtnDecrementClick = () => {
    return count.textContent = counterValue-=1;
}
btnDecrement.addEventListener("click", onBtnDecrementClick);




 