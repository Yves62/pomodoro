const timeWork = document.querySelector('#time-work');
const timePause = document.querySelector('#time-pause');
const btnStart = document.querySelector('#start');
const btnReload = document.querySelector('#reload');

let seconds = 0;
let minutes = 30;

/**
 * Function to decreaseMinutes
 */
function decreaseMinutes() {
  if (seconds === 0) {
    minutes--;
    console.log(minutes, "minutes");
  }
}

/**
 * function to decrease seconds 59 to 00
 */
function decreaseSeconds() {
  setInterval(() => {
    if (seconds === 0) {
      decreaseMinutes();
      seconds = 60;
      seconds--;
      seconds < 10 ? console.log('0'+seconds) : console.log(seconds)
    } else {
      seconds--;
      seconds < 10 ? console.log('0'+seconds) : console.log(seconds)
    }
  }, 1000);
}

decreaseSeconds();
