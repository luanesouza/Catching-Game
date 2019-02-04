console.log('Listening');
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const mice = document.querySelector('.mice');

// const createPeople = () => {
//   const notRandomPosition = (mouseCheese) => {
//     mouseCheese.style.top = -200 + 'px';
//   }
// };
//create other random people
const createMice = () => {
  const notRandomPosition = (mice) => {
      mice.style.right = 200 + 'px';
    }
    let mice = document.createElement('div');
    mice.setAttribute('class', 'mice');
    body.appendChild(mice);
};

for (i = 0; i < 5; i++){
  createMice();
};

//move the mouseCheese with the drug
const moveMouseCheese = (mouseCheese) => {
  let top = Math.random() * window.innerHeight;
  let left = Math.random() * window.innerWidth;
  // let right = Math.random() * window.innerWidth;
  mouseCheese.style.top = `${top}px`;
  mouseCheese.style.left = `${left}px`;
  // mouseCheese.style.right = `${right}px`;
};
//mouseCheese with drug move randomly
let mouseCheeseMove = setInterval(() => {
      moveMouseCheese(mouseCheese);
    }, 1000);
// move other people
const moveMice = (mice) => {
  let top = Math.random() * window.innerWidth;
  let left = 100;
  let right = Math.random() * window.innerHeight;
  mice.style.top = `${top}px`;
  mice.style.left =`${left}px`;
  mice.style.right = `${right}px`;

  let moveMice = setInterval(() => {
        moveMouseCheese(mice);
      }, 1000);
}


createMice();
moveMouseCheese(mouseCheese);
moveMice(mice);
