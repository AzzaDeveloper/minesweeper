function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//
var fadeinInterval;
var board = [];
var cleared = [];
// Click event
function cellClick(x, y, width, height) {
	var gameField = document.getElementById("game-field");
	console.log(y * width + x)
	var element = gameField.children[y * width + x];
	element.children[0].style.background = "rgba(0, 0, 0, 0)";
	if (board[y][x] == 1) {
		
		element.children[0].innerHTML = "•"
	} else {
		checkSurroundings(x, y, width, height);
	}
}

function checkSurroundings(x, y, width, height) {
	var bombCount = 0;
	var gameField = document.getElementById("game-field");
	var element = gameField.children[y * width + x];
	element.children[0].style.background = "rgba(0, 0, 0, 0)";
	for (let i = y - 1; i <= y + 1; i++) {
		for (let j = x - 1; j <= x + 1; j++) {
			if ((i >= 0) && (j >= 0) && (i < height)) {
				if (board[i][j] == 1) {
					bombCount += 1;
					console.log(`bomb at ${j} ${i}, adding to bomb count`)
				}
			}
		}
	}
	if (bombCount == 0) {
		cleared[y][x] = true;
		console.log("no bomb")
		for (let i = y - 1; i <= y + 1; i++) {
			for (let j = x - 1; j <= x + 1; j++) {
				if ((i >= 0) && (j >= 0) && (i < height) && (j < width)) {
					if (!cleared[i][j]) {
						checkSurroundings(j, i, width, height);
					}

				}
			}
		}
	} else {
		element.children[0].innerHTML = bombCount;
	}
}
// Filling the game field
function fillBoard(width, height, mines, name) {
	console.log(name)
	var gameField = document.getElementById("game-field");
	var gameScreen = document.getElementById("game-screen");
	var boardSize = document.getElementById("board-size")
	var diffText = document.getElementById("diff-name");
	// Adding the info the gamefield
	boardSize.innerHTML = `${width} x ${height}`;
	diffText.innerHTML = name;
	// Dynamically resizing the game field
	gameScreen.style.width = `${width * (25 + 2) + 40}px`;
	gameScreen.style.height = `${height * (25 + 2) + 40}px`;
	// Emptying the gameField
	clearInterval(fadeinInterval);
	while (gameField.firstChild) {
		gameField.firstChild.remove()
	}
	// Filling
	for (let i = 0; i < height; i++) {
		board[i] = [];
		cleared[i] = [];
		for (let j = 0; j < width; j++) {
			// Fill up the board with cells
			var cell = document.createElement("div");
			cell.classList.add("cell");
			gameField.appendChild(cell);
			var cellCover = document.createElement("div");
			cellCover.classList.add("cell-cover");
			cell.appendChild(cellCover);
            // 0 no bomn
            // 1 bomb
            board[i][j] = 0;
			cleared[i][j] = false;
			// Add a custom attribute to the cell
			cellCover.style.setProperty("--animation-order", (j + i));
			// attach click event
			cellCover.addEventListener("click", function() {
				cellClick(j, i, width, height);
			});
		}
	}
    // Fill in bombs
    var bombLeft = mines;
    while (bombLeft > 0) {
		var randY = randomInt(0, height - 1);
		var randX = randomInt(0, width - 1)
        if (board[randY][randX] == 0) {
            board[randY][randX] = 1;
            bombLeft -= 1;
			console.log(`added bomb to ${randY} ${randX}`)
        }
    }
	console.log(board)
	console.log(cleared)

    // Fade in the board
	/* var count = 0;
	fadeinInterval = setInterval(() => {
		gameField.children[count].style.opacity = 1;
		count++;
		if (count > width * height - 1) {
			clearInterval(fadeinInterval);
		}
	}, 0);*/
}