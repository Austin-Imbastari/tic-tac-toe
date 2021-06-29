'use strict';

export default class GameView {
	constructor() {
		console.log('game view');
	}
	updateBoard(game) {
		this.updateTurn(game);
		const winningComb = game.winnerCombination();
		for (let i = 0; i < game.board.length; i++) {
			const tile = document.querySelector(`.tile[data-index='${i}']`);
			const winnerX = document.getElementById('winner-x');
			const winnerO = document.getElementById('winner-o');

			tile.classList.remove('tile-winner');

			tile.textContent = game.board[i];
			let tileType = game.board[i] === 'X' ? 'tile-x' : 'tile-o';
			tile.innerHTML = `<span class=${tileType}>${game.board[i] ? game.board[i] : ''}</span>`;

			if (winningComb && winningComb.includes(i)) {
				tile.classList.add('tile-winner');
			}

			if (winningComb && game.turn === 'X') {
				winnerX.textContent = 'Player X Wins!';
				winnerX.classList.add('active');
			} else if (winningComb && game.turn === 'O') {
				winnerO.textContent = 'Player 0 Wins';
				winnerO.classList.add('active');
			}
		}
	}
	updateTurn(game) {
		let playerX = document.querySelector('.player-x');
		let playerO = document.querySelector('.player-o');

		if (game.turn === 'X') {
			playerO.classList.remove('active');
			playerX.classList.add('active');
		} else {
			playerX.classList.remove('active');
			playerO.classList.add('active');
		}
	}
}
