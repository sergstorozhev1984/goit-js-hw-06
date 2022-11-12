const refs = {
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
}
refs.buttonCreateEl.addEventListener('click', getAmount);
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = +refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i+=1) {
    refs.divBoxesEl.innerHTML += `<div style="width:${size + i * 10}px; height:${size + i * 10}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  refs.divBoxesEl;
}

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
