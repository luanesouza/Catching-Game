console.log('Listening');
// ************* Setting global variables *************
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const gameboard = document.querySelector('.gameboard');
let score = 0;

const createMice = () => {
  const notRandomPosition = (mouseCheese, mouse) => {
    mouseCheese.style.top = -200 + 'px';
    mouse.style.top = -200 + 'px';
  }
};

//************* create one mouse *************
const createMouse = () => {

let mouse = document.createElement('div');
mouse.setAttribute('class', 'mouse');
gameboard.appendChild(mouse);


// ************* move that one mouse *************
const moveMouse = (mouse) => {
  let top = Math.random() * gameboard.offsetWidth;
  let left = Math.random() * gameboard.offsetHeight;
  mouse.style.top = `${top}px`;
  mouse.style.left =`${left}px`;
};


//************* remove mouse when hovered over *************
mouse.addEventListener('click', () => {
  mouse.classList.remove('mouse');
  let mouseClass = mouse.classList;
  for (i = 1; i > mouse.classList; i-- ) {
    score+=10;
    console.log(`You earned 10 points. Your score is ${score}`);
  }
});

let mouseMove = setInterval(() => {
        moveMouse(mouse);
      }, 980);
};

for (i = 0; i < 3; i++) {
  createMouse();
}
//************* move the mouseCheese with the cheese *************
const moveMouseCheese = (mouseCheese) => {
  let top = Math.random() * gameboard.offsetWidth;
  let left = Math.random() * gameboard.offsetHeight;
  mouseCheese.style.top = `${top}px`;
  mouseCheese.style.left = `${left}px`;
};

//************* mouseCheese with cheese move randomly *************

let mouseCheeseMove = setInterval(() => {
      moveMouseCheese(mouseCheese);
    }, 1000);

mouseCheese.addEventListener('click', () => {
    mouseCheese.classList.remove('mouseCheese');
    for (i = 1; i > mouseCheese.classList; i-- ) {
        score+=50;
      console.log(`You earned 10 points. Your score is ${score}`);
    }
});





createMouse();
// moveMouseCheese(mouseCheese);
// moveMouse(mouse);
