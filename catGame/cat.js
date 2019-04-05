
// ************* Setting global variables *************
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('.scoreBoard');
let timerBoard = document.querySelector('.timerBoard');
let score = 0;
let timeLeft = 20;

//************* Mice start at a not random position *************

const createMice = () => {
  const notRandomPosition = (mouseCheese, mouse) => {
    mouseCheese.style.left = -500 + 'px';
    mouse.style.left = -200 + 'px';
  }
};

//************* create one mouse *************
function createMouse() {

  let mouse = document.createElement('div');
  mouse.setAttribute('class', 'mouse');
  gameboard.appendChild(mouse);

  // ************* move that one mouse *************
  const moveMouse = (mouse) => {
    let top = Math.random() * gameboard.offsetHeight;
    let right = Math.random() * gameboard.offsetHeight;
    mouse.style.top = `${top}px`;
    mouse.style.left =`${right}px`;
  };
  //************* remove mouse when clicked *************
  mouse.addEventListener('click', () => {
    mouse.classList.remove('mouse');
    let mouseClass = mouse.classList;
    for (i = 1; i > mouse.classList; i-- ) {
      score+=10;
      scoreBoard.innerHTML = `Your score is ${score}`
    }
  });

  let mouseMove = setInterval(() => {
          moveMouse(mouse);
        }, 980);

  const removeMice = () => {
    let allMice = document.querySelectorAll('.mouse');
    let allCheese = document.querySelector('.mouseCheese');
    if (allCheese) {
    allCheese.remove();
  }
    allMice.forEach(mice => {
      mice.remove();
    });
  }
  return removeMice;
};

//************* create more mice class *************

let removeMice;
for (i = 0; i < 10; i++) {
  removeMice = createMouse();
}
//************* move the mouse with the cheese(50 points) *************
const moveMouseCheese = (mouseCheese) => {
  let top = Math.random() * gameboard.offsetHeight;
  let right = Math.random() * gameboard.offsetHeight;
  mouseCheese.style.top = `${top}px`;
  mouseCheese.style.right = `${right}px`;
};

//************* mouse with cheese move randomly *************

let mouseCheeseMove = setInterval(() => {
      moveMouseCheese(mouseCheese);
    }, 1000);

mouseCheese.addEventListener('click', () => {
    mouseCheese.classList.remove('mouseCheese');
    for (i = 1; i > mouseCheese.classList; i-- ) {
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
          removeMice();
      }
};


checkScore();
