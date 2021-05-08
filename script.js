'use strict';
//random number
let b = Math.trunc(Math.random() * 20) + 1;

console.log(b);
let sc = 20;
let highScore = 0;

//value
document.querySelector('.check').addEventListener('click', function () {
  const gs = Number(document.querySelector('.guess').value);

  //function of message
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //Background colour
  const backColour = function (colour) {
    document.querySelector('body').style.backgroundColor = colour;
  };

  //no input
  if (!gs) {
    displayMessage('Not a Number');
  }

  //Correct Number
  else if (gs === b) {
    displayMessage('🏆🏆 Right Number WOOOOHHHW');
    document.querySelector('.number').textContent = b;
    backColour('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.head').textContent = 'CORRECT GUESS';
    document.querySelector('.heading').textContent = 'CORRECT GUESS';
    if (sc > highScore) {
      highScore = sc;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Different case :
  else if (gs !== b) {
    if (sc > 0) {
      if (gs < b) {
        displayMessage('👇 Too low');
        backColour('#778899');
      }
      if (gs > b) {
        displayMessage('☝ Too high');
        backColour('#FF4500');
      }
      sc--;
      document.querySelector('.score').textContent = sc;
    } else {
      displayMessage('Try again');
      backColour('#ff0000');
      document.querySelector('.head').textContent = 'YOU LOST THE GAME';
      document.querySelector('.heading').textContent = 'YOU LOST THE GAME';
    }
  }
});

//Relode the page :
document.querySelector('.again').addEventListener('click', function () {
  sc = 20;
  b = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.head').textContent = 'Guess My Number';
  displayMessage('Start guessing');
  document.querySelector('.heading').textContent = 'Guess My Number!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});

//reset the page
document.querySelector('.reset').addEventListener('click', function () {
  location.reload();
});
