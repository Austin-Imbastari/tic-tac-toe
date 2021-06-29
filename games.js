'use strict';

export default class Game {
	constructor() {
		this.turn = 'X';
		this.board = new Array(9).fill(null);
		// console.log(this.board);
	}
	nextTurn() {
		if (this.turn == 'X') {
			this.turn = 'O';
		} else if (this.turn == 'O') {
			this.turn = 'X';
		}
	}

	makeMove(i) {
		if (this.endOfGame()) {
			return;
		}

		if (this.board[i]) {
			return;
		}
		this.board[i] = this.turn;
		let winningComb = this.winnerCombination();
		if (!winningComb) {
			this.nextTurn();
		}
	}

	winnerCombination() {
		const winningCombination = [
			[ 0, 1, 2 ],
			[ 0, 3, 6 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 4, 8 ],
			[ 6, 4, 2 ]
		];
		for (const combination of winningCombination) {
			const [ a, b, c ] = combination;
			if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
				return combination;
			}
		}
		return null;
	}

	endOfGame() {
		let winnerCombination = this.winnerCombination();
		if (winnerCombination) {
			return true;
		} else {
			return false;
		}
	}
}
