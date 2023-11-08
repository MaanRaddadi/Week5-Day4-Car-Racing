const redCar = document.getElementById("car1");
const yellowCar = document.getElementById("car2");
var myModal = new bootstrap.Modal(document.getElementById("modal"));
var x = 0;
var y = 0;
let timer;
let winner;
redCar.style.left = 0;

yellowCar.style.left = 0;
startTimer();

function startRace() {
  checkWinner();
  if (winner === true) {
    clearInterval(timer);
  } else {
    x += Math.floor(Math.random() * 31);
    y += Math.floor(Math.random() * 31);
    redCar.style.left = x + "px";
    yellowCar.style.left = y + "px";
  }
}
function startTimer() {
  timer = setInterval(startRace, 150);
}

function checkWinner() {
  if (redCar.getBoundingClientRect().left > 1200) {
    clearInterval(timer);
    winner = redCar;
    return displayWinner(winner);
  } else if (yellowCar.getBoundingClientRect().left > 1200) {
    clearInterval(timer);
    winner = yellowCar;
    return displayWinner(winner);
  }
}
function displayWinner(winner) {
  if (winner === redCar) {
    document.body.style.backgroundColor = "red";
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<h2 style='text-align: center'>RED Car Won</h2>"
    );
  } else if (winner === yellowCar) {
    document.body.style.backgroundColor = "yellow";
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<h2 style='text-align: center'>Yellow Car Won</h2>"
    );
  }
}
