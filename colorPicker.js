let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModes();
	setUpSquares();
	reset();
};

resetButton.addEventListener("click", function(){
	reset();
});

function setUpModes(){
	for(let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(let i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];
	//add click listeners
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			// compare color to picked color
			if(clickedColor === pickedColor){
				resetButton.textContent = "Play Again?";
				messageDisplay.textContent = "correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	resetButton.textContent = "new colors";
	messageDisplay.textContent = "";
	// generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// pick new color from array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	// loop through all squares, change color
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make array
	let arr = [];
	//add num random colors to arr
	for(let i = 0; i < num; i++){
		//get random color, push into arr
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256); 
	// green
	let g = Math.floor(Math.random() * 256); 
	// blue
	let b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}