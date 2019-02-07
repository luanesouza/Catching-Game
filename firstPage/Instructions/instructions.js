body = document.querySelector('body');
footer = document.querySelector('footer');
text = document.querySelector('p');

function createMouse() {

  let mouse = document.createElement('div');
  mouse.setAttribute('class', 'mouse');
  footer.appendChild(mouse);

  let mouseMove = setInterval(() => {
        moveMouse(mouse);
      }, 980);

  const moveMouse = (mouse) => {
    let bottom = Math.random() * 300;
    let right = Math.random() * footer.clientWidth;
    mouse.style.bottom = `${bottom}px`;
    mouse.style.left =`${right}px`;
  };
}
for (i = 0; i < 20; i++){
  createMouse();
}
createMouse();

// Inserting text
let insertText = setInterval(() => {
  text.innerText = `Hey, I am so glad you chose to help me deal with my mice problem.
  You should know that each mouse equals 10 points. Oh, wait! There's one that stole my cheese!
  It is the sneakiest one, hides under the score board all the time. That one is 50 points.`;
}, 3000);
