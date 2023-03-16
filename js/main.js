const box = document.querySelector(".box-fill");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const inputRed = document.querySelector(".red");
const inputGreen = document.querySelector(".green");
const inputBlue = document.querySelector(".blue");
const duration = document.getElementById("duration");
const colorWrapper = document.querySelector(".wrap-color-input");
const durationWrapper = document.querySelector(".duration");
const displayError1 = document.querySelector(".error-message1");
const displayError2 = document.querySelector(".error-message2");

let x = 0;
let nInterval;

function changeFill() {
  x -= 20;
  if (x <= -200) {
    x = 0;
    return;
  }

  box.style.background = `rgb(${inputRed.value - x},${inputGreen.value - x},${
    inputBlue.value - x
  })`;
  box.style.border = "none";
}

function change() {
  let delay = duration.value * 1000;

  if (!nInterval) {
    nInterval = setInterval(changeFill, delay);
    console.log(delay);
  }
}

startBtn.addEventListener("click", function () {
  if (inputRed.value > 500 || inputGreen.value > 500 || inputBlue.value > 500) {
    return (displayError1.innerHTML = `<p style="color:rgb(255, 76, 86); font-size:0.8rem">Values must be between 1 and 500</p>`);
  }
  if (duration.value > 5) {
    return (displayError2.innerHTML = `<p style="color: rgb(255, 76, 86); font-size:0.8rem">Value must be between 0 and 5 seconds</p>`);
  }
  if (
    duration.value == "" ||
    inputBlue.value == "" ||
    inputGreen.value == "" ||
    inputRed.value == ""
  ) {
    return (displayError2.innerHTML = `<p style="color: rgb(255, 76, 86); font-size:0.8rem">Please fill all input fields</p>`);
  }
  displayError1.innerHTML = "";
  displayError2.innerHTML = "";
  change();

  //Hide HTML elements
  startBtn.style.display = "none";
  stopBtn.style.display = "block";

  colorWrapper.style.display = "none";
  durationWrapper.style.display = "none";
});

stopBtn.addEventListener("click", function () {
  clearInterval(nInterval);
  nInterval = null;

  //Display HTML elements
  stopBtn.style.display = "none";
  startBtn.style.display = "block";

  colorWrapper.style.display = "block";
  durationWrapper.style.display = "block";
});
