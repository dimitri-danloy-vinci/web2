let counter = 0;
let messageWrapper = document.querySelector('.message');
let counterWrapper = document.querySelector('.counter');

window.addEventListener('click', () => {
  ++counter;
  counterWrapper.textContent = counter;
  if (counter === 5) messageWrapper.textContent = "5... C'est tout ?!";
  else if (counter === 10) messageWrapper.textContent = "10... Aller continue !";
  else if (counter === 100) messageWrapper.textContent = "100... Pas mal";
  else if (counter === 500) messageWrapper.textContent = "500... Quel boss";
  else if (counter === 1000) messageWrapper.textContent = "1000... Trouve toi un travail sale chômeur";
});
