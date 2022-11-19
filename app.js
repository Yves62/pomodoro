const timeWork = document.querySelector("#time-work");
const timePause = document.querySelector("#time-pause");
const btnStart = document.querySelector("#start");
const btnReload = document.querySelector("#reload");
const info = document.querySelector('.info')
const infoWork = document.querySelector('#emoji-work');
const infoPause = document.querySelector('#emoji-pause');

let secondsWork = 0;
let minutesWork = 25;
let secondsPause = 0;
let minutesPause = 5;
let intervalWork;
let intervalPause;

/**
 * Function to decreaseMinutesWork
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
 * Function to clear interval work
 */
function stopCptWork() {
  if (secondsWork === 0 && minutesWork === 0) {
    timeWork.textContent = `${(minutesWork = 25)} : 0${(secondsWork = 0)}`;
    clearInterval(intervalWork);
    infoWork.style.display = 'none';
    infoPause.style.display = 'block';
    decreaseSecondsPause();
  }
}

/**
 * Function to clear interval pause
 */
function stopCptPause() {
  if (secondsPause === 0 && minutesPause === 0) {
    timePause.textContent = `${(secondsPause = 5)} : 0${(minutesPause = 0)}`;
    clearInterval(intervalPause);
    infoPause.style.display = 'none';
  }
}

/**
 * function to decrease seconds work 59 to 00
 */
function decreaseSecondsWork() {
  intervalWork = setInterval(() => {
    if (secondsWork === 0) {
      decreaseMinutesWork();
      secondsWork = 60;
    } else {
      secondsWork--;
      secondsWork < 10
        ? (timeWork.textContent = `${minutesWork} : 0${secondsWork}`)
        : (timeWork.textContent = `${minutesWork} : ${secondsWork}`);
      stopCptWork();
    }
  }, 1000);
}

/**
 * function to decrease seconds pause 59 to 00
 */
function decreaseSecondsPause() {
  intervalPause = setInterval(() => {
    if (secondsPause === 0) {
      decreaseMinutesPause();
      secondsPause = 60;
      secondsPause--;
      secondsPause < 10
        ? (timePause.textContent = `${minutesPause} : 0${secondsPause}`)
        : (timePause.textContent = `${minutesPause} : ${secondsPause}`);
    } else {
      secondsPause--;
      secondsPause < 10
        ? (timePause.textContent = `${minutesPause} : 0${secondsPause}`)
        : (timePause.textContent = `${minutesPause} : ${secondsPause}`);
      stopCptPause();
    }
  }, 1000);
}

btnStart.addEventListener("click", () => {
    infoWork.style.display = 'block';
  decreaseSecondsWork();
  btnStart.style.display = "none";
  btnReload.style.display = "block";
});

btnReload.addEventListener("click", () => {
  timeWork.textContent = `${(minutesWork = 25)} : 0${(secondsWork = 0)}`;
  clearInterval(intervalWork);
  timePause.textContent = `${(secondsPause = 5)} : 0${(minutesPause = 0)}`;
  clearInterval(intervalPause);
  btnStart.style.display = "block";
  btnReload.style.display = "none";
  infoWork.style.display = "none";
  infoPause.style.display = "none";
});
