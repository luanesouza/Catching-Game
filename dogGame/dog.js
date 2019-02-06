
// ************* Setting global variables *************
const body = document.querySelector('body');
const squirrelNut = document.querySelector('.squirrelNut');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('.scoreBoard');
let timerBoard = document.querySelector('.timerBoard');
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
  squirrel.addEventListener('click', () => {
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


      const removeSquirrels = () => {
        let allSquirrels = document.querySelectorAll('.squirrel');
        let allNuts = document.querySelector('.squirrelNut');
        if (squirrelNut) {
        squirrelNut.remove();
      }
        allSquirrels.forEach(squirrel => {
          squirrel.remove();
        });
      }
        //we return the removeMice variable to access it outside of the createMouse function's scope.
        return removeSquirrels;
};
//************* create more Squirrels class *************
let removeSquirrels;
for (i = 0; i < 5; i++) {
  createSquirrel();
  removeSquirrels = createSquirrel();
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

squirrelNut.addEventListener('click', () => {
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
    if (score === 150 && timeLeft > 1) {
      timerLeft = clearInterval(downloadTimer);
      timerBoard.innerHTML = `You win!`;

    } else if (score < 150 && timeLeft === 0) {
         timerBoard.innerHTML = `Your time is up! You scored ${score} points.`;
         removeSquirrels();
      }
  }

checkScore();
createSquirrel();
