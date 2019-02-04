console.log('Listening');
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const main = document.querySelector('main');
const createMice = () => {
  const notRandomPosition = (mouseCheese, mouse) => {
    mouseCheese.style.top = -200 + 'px';
    mouse.style.top = -200 + 'px';
  }
};

//create one mouse
const createMouse = () => {
  const notRandomPosition = (mouse) => {
      mouse.style.top = -200 + 'px';
    }

let mouse = document.createElement('div');
mouse.setAttribute('class', 'mouse');
main.appendChild(mouse);



// move that one mouse
const moveMouse = (mouse) => {
  let top = Math.random() * window.innerHeight;
  let left = Math.random() * window.innerWidth;
  let right = Math.random() * window.innerWidth;
  mouse.style.top = `${top}px`;
  mouse.style.left =`${left}px`;
  mouse.style.right = `${right}px`;
};

//remove mouse when hovered over
mouse.addEventListener('mouseover', () => {
  mouse.classList.remove('mouse');
  for (i = 10; i > mouse.classList; i-- ) {
    console.log('You earned 10 points');
  }
});

let mouseMove = setInterval(() => {
        moveMouse(mouse);
      }, 980);
};

for (i = 0; i < 3; i++) {
  createMouse();
}
// move the mouseCheese with the cheese
const moveMouseCheese = (mouseCheese) => {
  let top = Math.random() * window.innerHeight;
  let left = Math.random() * window.innerWidth;
  mouseCheese.style.top = `${top}px`;
  mouseCheese.style.left = `${left}px`;
};

//mouseCheese with cheese move randomly
let mouseCheeseMove = setInterval(() => {
      moveMouseCheese(mouseCheese);
    }, 1000);

mouseCheese.addEventListener('mouseover', () => {
    mouseCheese.classList.remove('mouseCheese');
    if (mouseCheese.classList === 0) {
      console.log('You found the cheese. +50 points');
    }
});





createMouse();
// moveMouseCheese(mouseCheese);
// moveMouse(mouse);
