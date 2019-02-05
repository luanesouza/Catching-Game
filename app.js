console.log('Listening');
// ************* Setting global variables *************
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('h3');
let winBoard = document.querySelector('h4');
let score = 0;

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
mouse.addEventListener('click', () => {
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

mouseCheese.addEventListener('click', () => {
    mouseCheese.classList.remove('mouseCheese');
    for (i = 1; i > mouseCheese.classList; i-- ) {
        score+=50;
        scoreBoard.innerHTML = `Your score is ${score}`
    }
});
console.log(`You earned 10 points. Your score is ${score}`);

//************* SCORE *************
scoreBoard.innerHTML = `Your score is ${score}`;
 const checkScore = () => {
   if (score === 90) {
     winBoard.innerHTML = `You caught all the mice! You win!`

   }
 }



createMouse();
// moveMouseCheese(mouseCheese);
// moveMouse(mouse);
