// Clears all menu
// @TODO: Make function and reversible.
document.getElementById("singleplayerButton").addEventListener("click", function() {
	var menu = document.getElementById("menu");
	var title = document.getElementById("title");
	var gameOverlay = document.getElementById("game-overlay");
	var gameScreen = document.getElementById("game-screen");
	var difficulties = document.getElementById("difficulties");
	// Fade out the menu buttons
	for (child of menu.children) {
		child.classList.toggle("black-button-fade");
		setTimeout(() => {
			child.classList.toggle("black-button-fade");
		}, 1100);
	}
	// Fade title
	title.classList.toggle("title-fade");
	setTimeout(() => {
		title.classList.toggle("title-fade");
		title.style.display = "none";
	}, 1000);
	// Remove menu display entirely
	setTimeout(() => {
		menu.style.display = "none";
	}, 1100);
	// Add in the game screen after halfway of fade
	setTimeout(() => {
		gameScreen.style.background = "#1c1f24";
	}, 750);
	// Fade in game screen
	gameOverlay.style.display = "block";
	gameOverlay.classList.toggle("game-overlay-fadein");
	setTimeout(() => {
		gameOverlay.classList.toggle("game-overlay-fadein");
		gameOverlay.style.display = "none";
	}, 1000);
	// Fade in difficulties
	difficulties.classList.toggle("difficulties-fade");
	setTimeout(() => {
		gameOverlay.classList.toggle("difficulties-fade");
		gameOverlay.style.display = "none";
	}, 1000);
	// Filling 
	setTimeout(() => {
		// Filling board with beginner 
		fillBoard(7, 7, 10, "Beginner");
	}, 1150);
})

// Initially fade out the game screen background
document.getElementById("game-screen").style.background("black");