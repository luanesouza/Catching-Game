section = document.querySelector('section');
dogInstr = document.querySelector('.dogInstr');
catInstr = document.querySelector('.catInstr');


function showTextCat() {
  let insertText = setInterval(() => {
    catInstr.innerText = `Hey, ready for an adventure? We will capture all the mice we can spot.
    You should know that each mouse equals 10 points. Oh, wait! There's one that stole the cheese!
    It is the sneakiest one, hides under the score board all the time. That one is 50 points.`;
  }, 1000);
}

function showTextDog() {
  let insertText = setInterval(() => {
    dogInstr.innerText = `Hey, ready for an adventure? We will capture all the squirrels we can spot.
    You should know that each squirrel equals 10 points. Oh, wait! One of them has a nut!
    It is the sneakiest one, hides under the score board all the time. That one is 50 points.`;
  }, 1000);
}
