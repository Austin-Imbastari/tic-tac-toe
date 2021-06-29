'use strict';
import Game from './games.js';
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();

const allTiles = document.querySelectorAll('.tile');
const winnerX = document.getElementById('winner-x');
const winnerO = document.getElementById('winner-o');
const theme = document.getElementById('theme-link');
const btn = document.querySelector('.btn-darkmode');
const btnStart = document.querySelector('.restart-btn');

allTiles.forEach((tile) => {
	tile.addEventListener('click', () => {
		onTileClick(tile.dataset.index);
	});
});

function onTileClick(i) {
	game.makeMove(i);
	gameView.updateBoard(game);
}

btnStart.addEventListener('click', () => {
	onRestart();
});
btn.addEventListener('click', darkMode);

function onRestart() {
	winnerX.textContent = 'Player X';
	winnerX.classList.remove('active');
	winnerO.textContent = 'Player 0';
	winnerO.classList.remove('active');

	game = new Game();
	gameView.updateBoard(game);
}

function darkMode() {
	if (theme.getAttribute('href') == 'styles.css') {
		// ... then switch it to "dark-theme.css"
		theme.href = 'darkTheme.css';
		// Otherwise...
	} else {
		// ... switch it to "light-theme.css"
		theme.href = 'styles.css';
	}
}

gameView.updateBoard(game);
