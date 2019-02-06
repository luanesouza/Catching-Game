
// ************* Setting global variables *************
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const gameboard = document.querySelector('.gameboard');
let scoreBoard = document.querySelector('.scoreBoard');
let timerBoard = document.querySelector('.timerBoard');
let score = 0;
let timeLeft = 10;

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
  mouse.addEventListener('mouseover', () => {
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

//we define an anonymous arrow function and then assign it to the removeMice variable.
//this functions selects all of the mice nodes and assigns them to variables.
//we then remove the mice using the .forEach to loop through a nodeList.
  const removeMice = () => {
    let allMice = document.querySelectorAll('.mouse');
    let allCheese = document.querySelector('.mouseCheese');
    allCheese.remove();
    allMice.forEach(mice => {
      mice.remove();
    });
  }
  //we return the removeMice variable to access it outside of the createMouse function's scope.
  return removeMice;
};

//************* create more mice class *************
//we need to assign the removeMice function definition that was returned from createMouse.
//since it is inside of a for loop, the variable assignment will get reassigned multiple times.
//Thats why we instantiate the variable before the loop.
let removeMice;
for (i = 0; i < 5; i++) {
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

mouseCheese.addEventListener('mouseover', () => {
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
    if (score === 110 && timeLeft > 1) {
      timerLeft = clearInterval(downloadTimer);
      timerBoard.innerHTML = `You win!`;

    } else if (score < 110 && timeLeft === 0) {
         timerBoard.innerHTML = `Your time is up! You scored ${score} points.`;
          removeMice();
      }
  }


checkScore();
