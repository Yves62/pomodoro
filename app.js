const timeWork = document.querySelector("#time-work");
const timePause = document.querySelector("#time-pause");
const btnStart = document.querySelector("#start");
const btnReload = document.querySelector("#reload");

let secondsWork = 0;
let minutesWork = 25;
let secondsPause = 0;
let minutesPause = 5;

/**
 * Function to decreaseMinutes
 */
function decreaseMinutesWork() {
  if (secondsWork === 0) {
    minutesWork--;
  }
}
/**
 * Function to decreaseMinutesPause
 */
function decreaseMinutesPause() {
  if (secondsPause === 0) {
    minutesPause--;
  }
}

/**
 * function to decrease seconds 59 to 00
 */
function decreaseSecondsWork() {
  setInterval(() => {
    if (secondsWork === 0) {
      decreaseMinutesWork();
      secondsWork = 60;
      secondsWork--;
      secondsWork < 10 ? timeWork.textContent = `${minutesWork} : 0${secondsWork}` : timeWork.textContent = `${minutesWork} : ${secondsWork}`;
    } else {
      secondsWork--;
      secondsWork < 10 ? timeWork.textContent = `${minutesWork} : 0${secondsWork}` : timeWork.textContent = `${minutesWork} : ${secondsWork}`;
    }
  }, 1000);
}

/**
 * function to decrease seconds 59 to 00
 */
function decreaseSecondsPause() {
  setInterval(() => {
    if (secondsPause === 0) {
      decreaseMinutesWork();
      secondsPause = 60;
      secondsPause--;
      secondsPause < 10 ? timePause.textContent = `${minutesPause} : 0${secondsPause}` : timePause.textContent = `${minutesPause} : ${secondsPause}`;
    } else {
      secondsPause--;
      secondsPause < 10 ? timePause.textContent = `${minutesPause} : 0${secondsPause}` : timePause.textContent = `${minutesPause} : ${secondsPause}`;
    }
  }, 1000);
}

btnStart.addEventListener("click", () => {
  decreaseSecondsWork();
  btnStart.textContent = 'stop'
});
