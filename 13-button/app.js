'use strict'

const buttonsDiv = document.querySelector('.buttons');
const counter = document.querySelector('.counter');
const pressedButtonText = 'Нажато!'
const defaultButtonText = 'Нажми меня!';

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerHTML = defaultButtonText;
  button.classList.add('button');
  button.setAttribute('data-id', i);
  buttonsDiv.append(button);
}

buttonsDiv.addEventListener('click', function (event) {
  if (event.target.classList.contains('button')){
    const button = event.target;
    for (let butt of button.parentElement.children) {
      butt.innerHTML = defaultButtonText;
    }
    button.innerHTML = pressedButtonText;
    counter.innerHTML = Number(counter.innerHTML) + 1;
  }
});