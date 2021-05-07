'use strict';
//number
const b = Math.trunc(Math.random() * 20) + 1;
let sc = 20;
document.querySelector('.check').addEventListener('click', function () {
  const gs = Number(document.querySelector('.guess').value);

  if (!gs) {
    document.querySelector('.message').textContent = 'Not a Number';
  }
  //Correct Number
  else if (gs === b) {
    document.querySelector('.message').textContent =
      '🏆🏆 Right Number WOOOOHHHW';
    document.querySelector('.number').textContent = b;
    document.querySelector('.highscore').textContent = sc;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.head').textContent = 'CORRECT GUESS';
    document.querySelector('.heading').textContent = 'CORRECT GUESS';
  }
  //Number low
  else if (gs < b) {
    if (sc > 0) {
      document.querySelector('.message').textContent = '😕 Too low';
      document.querySelector('body').style.backgroundColor = '#708090';
      sc--;
      document.querySelector('.score').textContent = sc;
    } else {
      document.querySelector('.message').textContent = 'Try again';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.head').textContent = 'YOU LOST THE GAME';
      document.querySelector('.heading').textContent = 'YOU LOST THE GAME';
    }
  }
  //Number high
  else if (gs > b) {
    if (sc > 0) {
      document.querySelector('.message').textContent = '😕 Too high';
      document.querySelector('body').style.backgroundColor = '#FF4500';
      sc--;
      document.querySelector('.score').textContent = sc;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.head').textContent = 'YOU LOST THE GAME';
      document.querySelector('.heading').textContent = 'YOU LOST THE GAME';
    }
  }
});
//Relode the page :
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
