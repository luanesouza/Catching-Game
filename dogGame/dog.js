
// ************* Setting global variables *************
const body = document.querySelector('body');
const squirrelNut = document.querySelector('.squirrelNut');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('.scoreBoard');
let timerBoard = document.querySelector('.timerBoard');
let winBoard = document.querySelector('h4');
let score = 0;
let timeLeft = 20;

//************* Squirrels start at a not random position *************

const createSquirrels = () => {
  const notRandomPosition = (squirrelNut, squirrel) => {
    squirrelNut.style.left = -500 + 'px';
    squirrel.style.left = -200 + 'px';
  }
};

//************* create one squirrel *************
const createSquirrel = () => {

let squirrel = document.createElement('div');
squirrel.setAttribute('class', 'squirrel');
gameboard.appendChild(squirrel);


// ************* move that one squirrel *************
const moveSquirrel = (squirrel) => {
  let top = Math.random() * gameboard.offsetHeight;
  let right = Math.random() * gameboard.offsetHeight;
  squirrel.style.top = `${top}px`;
  squirrel.style.left =`${right}px`;
};


//************* remove squirrel when hovered over *************
squirrel.addEventListener('mouseover', () => {
  squirrel.classList.remove('squirrel');
  let squirrelClass = squirrel.classList;
  for (i = 1; i > squirrel.classList; i-- ) {
    score+=10;
    scoreBoard.innerHTML = `Your score is ${score}`
  }
});

let squirrelMove = setInterval(() => {
        moveSquirrel(squirrel);
      }, 980);
};
//************* create more Squirrels class *************

for (i = 0; i < 5; i++) {
  createSquirrel();
}
//************* move the squirrel with the cheese(50 points) *************
const moveSquirrelNut = (squirrelNut) => {
  let top = Math.random() * gameboard.offsetHeight;
  let right = Math.random() * gameboard.offsetHeight;
  squirrelNut.style.top = `${top}px`;
  squirrelNut.style.right = `${right}px`;
};

//************* squirrel with cheese move randomly *************

let squirrelNutMove = setInterval(() => {
      moveSquirrelNut(squirrelNut);
    }, 1000);

squirrelNut.addEventListener('mouseover', () => {
    squirrelNut.classList.remove('squirrelNut');
    for (i = 1; i > squirrelNut.classList; i-- ) {
        score+=50;
        scoreBoard.innerHTML = `Your score is ${score}`
    }
});


 //************* TIMER *************
let downloadTimer = setInterval(function(){
   timerBoard.innerHTML = timeLeft + " seconds remaining";
   timeLeft -= 1;
   if (timeLeft > 1) {
     checkScore();
   } else if(timeLeft === 0) {
     clearInterval(downloadTimer);
     checkScore();
   }
 }, 1000);

 //************* SCORE *************

 scoreBoard.innerHTML = `Your score is ${score}`;
  const checkScore = () => {
    if (score === 110 && timeLeft > 1) {
      timerLeft = clearInterval(downloadTimer);
      timerBoard.innerHTML = `You win!`;
      // secondLevel();
    } else if (score < 110 && timeLeft === 0) {
         timerBoard.innerHTML = `Your time is up! You scored ${score} points.`;
      }
  }
//************* POST MVP SECOND LEVEL *************


// const buttonSecondLevel = document.createElement('button');
//   gameboard.appendChild(buttonSecondLevel);
//   let secondLevel = () => {
//     score = 90;
//     time = 30;
//     createsquirrel();
//     createSquirrels();
//     moveSquirrel();
//     moveSquirrelNut();
//     buttonSecondLevel.setAttribute('class', 'buttonSecondLevel');
//
//   }


checkScore();
createSquirrel();
