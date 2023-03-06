const startButton = document.querySelector('[data-start]');
const endButton = document.querySelector('[data-stop]');
//const colorSpan = document.querySelector('.color');
//const body = document.querySelector('body');

startButton.addEventListener('click', changeBodyColor);
endButton.addEventListener('click', stopChangeBodyColor);
let timerId = null;

function changeBodyColor() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.background = randomColor;
    startButton.setAttribute('disabled', true);
  }, 1000);
}

function stopChangeBodyColor() {
  startButton.removeAttribute('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
