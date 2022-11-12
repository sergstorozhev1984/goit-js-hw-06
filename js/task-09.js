const refs = {
  bodyEl: document.querySelector('body'),
  spanColorEl: document.querySelector('.color'),
  buttonChangeColorEl: document.querySelector('.change-color'),
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.buttonChangeColorEl.addEventListener('click', (e) => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  return refs.spanColorEl.textContent = getRandomHexColor();
})
