import { playButton, stopButton, addButton, decreaseButton, forestButton, rainButton, coffeeButton, fireplaceButton, luaButton, solButton } from './controls.js';
import {  forestSound, rainSound, coffeeSound, fireplaceSound } from './elements.js';
import { startTimer, stopTimer } from './timer.js';

var buttonsCards = [
  fireplaceButton,
  rainSound,
  coffeeSound,
  fireplaceSound
];

function reset(somParaLigar, buttonsCards) {
  
  buttonsCards.forEach(function(button) {
    if (button != somParaLigar) {
      button.pause();
      button.currentTime = 0;
    }
  });
 somParaLigar.play();
}

export function addEvents() {
  playButton.addEventListener('click', () => {
    startTimer();
    buttons.forEach(button => {
      if (button !== playButton) {
        button.classList.add('red');
      }
    });
  });

  stopButton.addEventListener('click',stopTimer);

  addButton.addEventListener('click', () => {
    minutes++;
    timerMinutes.textContent = minutes.toString().padStart(2, '0');
    if (minutes === 0) {
      if ( seconds === 0) {
        minutes = 5
      }
    }
  });

  decreaseButton.addEventListener('click', () => {
    minutes--;
    timerMinutes.textContent = minutes.toString().padStart(2, '0');
  });

  forestButton.addEventListener('click', () => {
    forestSound.play();
    const audio = document.querySelector('audio ')
    audio.play();
    reset(forestSound, buttonsCards);
    const volumeSlider = forestButton.querySelector('input[type="range"]');
    forestSound.volume = volumeSlider.value;
  
    audio.play();
    reset(forestSound, buttonsCards);
  
    volumeSlider.addEventListener('input', () => {
      forestSound.volume = volumeSlider.value;
    });
  
    forestButton.classList.add('active');
    rainButton.classList.remove('active');
    coffeeButton.classList.remove('active');
    fireplaceButton.classList.remove('active');
   
  });
  
  rainButton.addEventListener('click', () => {
    rainSound.play();
    const audio = document.querySelector('audio')
    audio.play()
    reset(rainSound, buttonsCards);
   
  });
  
  coffeeButton.addEventListener('click', () => {
    coffeeSound.play();
    const audio = document.querySelector('audio')
    audio.play()
    reset(coffeeSound, buttonsCards);
  });
  
  fireplaceButton.addEventListener('click', () => {
    fireplaceSound.play();
    const audio = document.querySelector('audio')
    audio.play()
    reset(fireplaceSound, buttonsCards);
   
  });
  
  luaButton.addEventListener('click', () => {
    document.body.classList.add('dark');
    solButton.classList.remove('hide');
    luaButton.classList.add('hide');
  });
  
  solButton.addEventListener('click', () => {
    document.body.classList.remove('dark');
    luaButton.classList.remove('hide');
    solButton.classList.add('hide');
  });
  
} 
