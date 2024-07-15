import party from 'party-js';

export type Player = 'X' | 'O';
export type Cell = Player | null;
export type GameStatus = 'ongoing' | 'won' | 'draw';
export type Game = {
	board: Cell[];
	currentPlayer: Player;
	gameStatus: GameStatus;
	makeMove: (index: number) => void;
	reset: () => void;
};

export function createGame(): Game {
	let board: Cell[] = $state(Array(9).fill(null));
	let firstPlayer: Player = Math.random() < 0.5 ? 'X' : 'O';
	let currentPlayer: Player = $state(firstPlayer);
	let gameStatus: GameStatus = $state('ongoing');

	const getWinner = (board: Cell[]) => {
		const winPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let pattern of winPatterns) {
			const [a, b, c] = pattern;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}

		return null;
	};

	function makeMove(index: number) {
		if (gameStatus !== 'ongoing' || board[index] !== null) {
			return;
		}

		board[index] = currentPlayer;

		const winner = getWinner(board);
		const isBoardFull = board.every((cell) => cell !== null);

		if (winner) {
			gameStatus = 'won';
			setTimeout(() => {
				const boardElement: HTMLDivElement | null = document.querySelector('.grid');
				if (boardElement) party.confetti(boardElement);
			}, 0);
		} else if (isBoardFull) {
			gameStatus = 'draw';
			setTimeout(() => {
				const boardElement: HTMLDivElement | null = document.querySelector('.grid');
				if (boardElement) party.sparkles(boardElement);
			}, 0);
		} else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	}

	function reset() {
		board.forEach((cell) => (cell = null));
		firstPlayer = firstPlayer === 'X' ? 'O' : 'X';
		currentPlayer = firstPlayer;
		gameStatus = 'ongoing';
	}

	return {
		board,
		currentPlayer,
		gameStatus,
		makeMove,
		reset
	};
}
