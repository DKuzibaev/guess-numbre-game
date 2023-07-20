'use strict';

const message = document.querySelector('.message'),
  checkBtn = document.querySelector('.check'),
  secretNumbre = document.querySelector('.number'),
  guessInput = document.querySelector('.guess'),
  score = document.querySelector('.score'),
  body = document.querySelector('body'),
  againBtn = document.querySelector('.again'),
  labelHighscore = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let scoreValue = 20;
let highscore = 0;

function basicGameLogic() {
  const guess = Number(document.querySelector('.guess').value);

  // Нет числа
  if (!guess) {
    message.textContent = '🕸 Числа нет!';

    // Игрок отгадал
  } else if (guess === randomNumber) {
    message.textContent = '🎉 Молодец, ты отгадал число!';
    secretNumbre.textContent = randomNumber;
    body.style.backgroundColor = '#60b347';
    secretNumbre.style.width = '30rem';

    if (scoreValue > highscore) {
      highscore = scoreValue;
      labelHighscore.textContent = highscore;
    }
    // Число больше
  } else if (guess > randomNumber) {
    if (scoreValue > 1) {
      message.textContent = '📈 Число слишком большое!';
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = '😿 Ты проиграл!';
      score.textContent = 0;
      body.style.backgroundColor = '#FF0000';
      secretNumbre.style.width = '30rem';
    }

    // Число меньше
  } else if (guess < randomNumber) {
    if (scoreValue > 1) {
      message.textContent = '📉 Число слишком маленькое!';
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = '😿 Ты проиграл!';
      score.textContent = 0;
      body.style.backgroundColor = '#FF0000';
      secretNumbre.style.width = '30rem';
    }
  }
}

function dropAgain() {
  scoreValue = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = '⌛ Начинаю загадывать...';
  score.textContent = scoreValue;
  secretNumbre.textContent = '?';
  guessInput.value = '';
  body.style.backgroundColor = '#222';
  secretNumbre.style.width = '15rem';
}

againBtn.addEventListener('click', dropAgain);
againBtn.addEventListener('touchstart', dropAgain);
checkBtn.addEventListener('click', basicGameLogic);
checkBtn.addEventListener('touchstart', basicGameLogic);
