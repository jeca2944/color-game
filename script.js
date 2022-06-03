let numSquares = 6;
let colors = generateRandomColors(numSquares);
let square = document.querySelectorAll(".square");
let pickedColor = pickColor();
let rgbCode = document.getElementById("rgbCode");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");



for(let i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Good Job!";
      resetButton.textContent = "Play Again ?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Keep Trying";
    }
  })
}

resetButton.addEventListener("click", function(){

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  messageDisplay.textContent = "";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

rgbCode.textContent = pickedColor;




function randomColor(){
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return "rgb(" + r +", " + g + ", " + b +")";
  }

  
function changeColors(color){
for (let i = 0; i < square.length; i++) {
    square[i].style.background = color;
}

}

function pickColor(){
let random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}
