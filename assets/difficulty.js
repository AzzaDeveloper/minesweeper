
// Switching difficulties
var difficulties = [
	{
		name: "Beginner",
		width: 7,
		height: 7,
		mines: 10
	},
	{
		name: "Easy",
		width: 8,
		height: 8,
		mines: 15
	},
	{
		name: "Normal",
		width: 10,
		height: 10,
		mines: 20
	},
	{
		name: "Hard",
		width: 12,
		height: 10,
		mines: 10
	},
	{
		name: "Extreme",
		width: 15,
		height: 10,
		mines: 50
	},
	{
		name: "there are 99 mines isnt that funky",
		width: 20,
		height: 10,
		mines: 99
	},
	{
		name: "Stone",
		width: 35,
		height: 15,
		mines: 120
	},
]
var currentDifficulty = 0;
document.getElementById("left-button").addEventListener("click", function() {
	currentDifficulty -= 1;
	if (currentDifficulty < 0) {
		currentDifficulty = 0;
	}
	var info = difficulties[currentDifficulty];
	fillBoard(info.width, info.height, info.mines, info.name);
    //
    document.getElementById("diff-name").classList.toggle("diff-text-fade");
    setTimeout(() => {
        document.getElementById("diff-name").classList.toggle("diff-text-fade");
    }, 100);
})
document.getElementById("right-button").addEventListener("click", function() {
	currentDifficulty += 1;
	if (currentDifficulty > difficulties.length) {
		currentDifficulty = 0;
	}
	var info = difficulties[currentDifficulty];
	fillBoard(info.width, info.height, info.mines, info.name);
    document.getElementById("diff-name").classList.toggle("diff-text-fade");
    setTimeout(() => {
        document.getElementById("diff-name").classList.toggle("diff-text-fade");
    }, 1000);
})