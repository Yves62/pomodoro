const timeWork = document.querySelector("#time-work");
const timePause = document.querySelector("#time-pause");
const btnStart = document.querySelector("#start");
const btnReload = document.querySelector("#reload");

let secondsWork = 0;
let minutesWork = 25;

/**
 * Function to decreaseMinutes
 */
function decreaseMinutesWork() {
  if (secondsWork === 0) {
    minutesWork--;
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

// decreaseSecondsWork();

btnStart.addEventListener("click", () => {
  decreaseSecondsWork();
  btnStart.textContent = 'stop'
});
