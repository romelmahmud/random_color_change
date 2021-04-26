/* 
todo
[x] create hex array
[x] secting element(btn, color-hex body)
[x] creating random function

[x] create event listner


*/

// color hex array

const colorHex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// selecting element
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const hexText = document.querySelector(".color-hex");

// adding eventlistener

btn.addEventListener("click", function (e) {
  let colorHexCode = "#";
  for (let i = 0; i < 6; i++) {
    // random numberhex
    const randomNumber = Math.floor(Math.random() * colorHex.length);
    colorHexCode += colorHex[randomNumber];
  }
  console.log(colorHexCode);
  body.style.backgroundColor = colorHexCode;
  hexText.style.color = colorHexCode;
  hexText.textContent = colorHexCode;
});
