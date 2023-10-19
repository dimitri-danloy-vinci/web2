const maxTime = 5;
const expectedClicks = 10;
let startTime;
let currentClicks = 0;
let timerReference;

const button = document.querySelector('button');
const message = document.querySelector('#message');

button.addEventListener('mouseenter', startCounter);
button.addEventListener('click', clickHandler);

function startCounter() {
  startTime = new Date();
  timerReference = setTimeout(printLoss, maxTime * 1000);
}

function clickHandler() {
  ++currentClicks;
  if (currentClicks === expectedClicks) {
    clearTimeout(timerReference);
    win();
  }
}

function printLoss() {
  const timeSpent = new Date().getSeconds() - startTime.getSeconds();
  button.style.display = 'none';
  message.innerHTML = `Game over, you did not click ${expectedClicks} times within ${maxTime}s!
    You clicked ${currentClicks} times`;
}

function win() {
  const secondSpent = new Date().getSeconds() - startTime.getSeconds();
  const millisecondSpent = new Date().getMilliseconds() - startTime.getMilliseconds();
  if (millisecondSpent < 0) millisecondSpent = millisecondSpent - (millisecondSpent*2);
  button.style.display = 'none';
  message.innerHTML = `You win ! you clicked ${expectedClicks} times within ${secondSpent}.${millisecondSpent}s!`;
}
