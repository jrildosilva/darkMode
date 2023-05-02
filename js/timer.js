import { timerMinutes, timerSeconds } from "./elements";

let minutes = 25;
let seconds = 25


function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      // Timer acabou
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  } 


  timerMinutes.textContent = minutes.toString().padStart(2, '0');
  timerSeconds.textContent = seconds.toString().padStart(2, '0');
}

export function stopTimer() {
  clearInterval(timerInterval)
}

export let timerInterval;

export function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}