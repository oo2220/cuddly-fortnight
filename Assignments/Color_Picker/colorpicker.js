let redCircle = document.getElementById("redButton");
let pinkCircle = document.getElementById("pinkButton");
let magentaCircle = document.getElementById("magentaButton");
let orangeCircle = document.getElementById("orangeButton");

let body = document.querySelector("body");


redCircle.addEventListener("click", turnred);
pinkCircle.addEventListener("click", turnpink);
magentaCircle.addEventListener("click", turnmagenta);
orangeCircle.addEventListener("click", turnorange);


function turnred() {
  console.log("redbutton");
  body.classList.add("red-theme");
}

function turnpink() {
  console.log("pinkbutton");
  body.classList.add("pink-theme");
}

function turnmagenta() {
  console.log("magenta button");
  body.classList.add("magenta-theme");
}

function turnorange() {
  console.log("orangebutton");
  body.classList.add("orange-theme");
}
