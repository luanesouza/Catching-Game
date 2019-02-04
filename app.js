console.log('Listening');
const body = document.querySelector('body');
const mouseCheese = document.querySelector('.mouseCheese');
const main = document.querySelector('main');
// const createPeople = () => {
//   const notRandomPosition = (mouseCheese) => {
//     mouseCheese.style.top = -200 + 'px';
//   }
// };

//create one mouse
const createMouse = () => {
  const notRandomPosition = (mouse) => {
      mouse.style.right = 200 + 'px';
    }
    let mouse = document.createElement('div');
    mouse.setAttribute('class', 'mouse');
    main.appendChild(mouse);
};
const mouse = document.querySelector('.mouse');


// move that one mouse
const moveMouse = (mouse) => {
  let top = Math.random() * window.innerWidth;
  let left = 100;
  // let bottom = 1000;
  let right = Math.random() * window.innerWidth;
  mouse.style.top = `${top}px`;
  mouse.style.left =`${left}px`;
  mouse.style.right = `${right}px`;
  // mouse.style.bottom = `${bottom}px`;
};

//remove mouse when hovered over
mouse.addEventListener('mouseover', () => {
  mouse.classList.remove('mouse');
});


let mouseMove = setInterval(() => {
        moveMouse(mouse);
      }, 1000);
// move the mouseCheese with the cheese
// const moveMouseCheese = (mouseCheese) => {
//   let top = Math.random() * window.innerHeight;
//   let left = Math.random() * window.innerWidth;
//   // let right = Math.random() * window.innerWidth;
//   mouseCheese.style.top = `${top}px`;
//   mouseCheese.style.left = `${left}px`;
//   // mouseCheese.style.right = `${right}px`;
// };
// //mouseCheese with cheese move randomly
// let mouseCheeseMove = setInterval(() => {
//       moveMouseCheese(mouseCheese);
//     }, 1000);
// mouseCheese.addEventListener('mouseover', () => {
//     mice.classList.remove('mouseCheese');
//     if (mouseCheese.length === 0) {
//       alert('You gained 50 points');
//     }
//     });





createMouse();
// moveMouseCheese(mouseCheese);
moveMouse(mouse);
