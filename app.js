console.log('Listening');
// ************* Setting global variables *************
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('.scoreBoard');
let timerBoard = document.querySelector('.timerBoard');
let winBoard = document.querySelector('h4');
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
const createMouse = () => {

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


//************* remove mouse when hovered over *************
mouse.addEventListener('mouseover', () => {
  mouse.classList.remove('mouse');
  let mouseClass = mouse.classList;
  for (i = 1; i > mouse.classList; i-- ) {
    score+=10;
    scoreBoard.innerHTML = `Your score is ${score}`
    console.log(`You earned 10 points. Your score is ${score}`);
  }
});

let mouseMove = setInterval(() => {
        moveMouse(mouse);
      }, 980);
};
//************* create more mice class *************

for (i = 0; i < 3; i++) {
  createMouse();
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

mouseCheese.addEventListener('mouseover', () => {
    mouseCheese.classList.remove('mouseCheese');
    for (i = 1; i > mouseCheese.classList; i-- ) {
        score+=50;
        scoreBoard.innerHTML = `Your score is ${score}`
    }
});
console.log(`You earned 10 points. Your score is ${score}`);


 //************* TIMER *************
let downloadTimer = setInterval(function(){
   timerBoard.innerHTML = timeLeft + " seconds remaining";
   timeLeft -= 1;
   if (timeLeft > 1) {
     checkScore();
   } else if(timeLeft <= 0) {
     checkScore();
   }
 }, 1000);

 //************* SCORE *************
 scoreBoard.innerHTML = `Your score is ${score}`;
  const checkScore = () => {
    if (score >= 40 || timeLeft < 1) {
      console.log('Anything');
      timerLeft = clearInterval(downloadTimer);
      timerBoard.innerHTML = `You win!`;

    } else if (score < 40 || timeLeft === 0) {
         timerBoard.innerHTML = `Your time is up! You scored only ${score} points.`;
      }
  }
checkScore();
createMouse();
// moveMouseCheese(mouseCheese);
// moveMouse(mouse);
