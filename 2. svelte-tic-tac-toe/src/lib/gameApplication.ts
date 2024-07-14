import { Game } from './domain/game';

export class GameApplication {
	private game: Game;
	private boardElement: HTMLDivElement;
	private statusElement: HTMLDivElement;
	private resetButton: HTMLButtonElement;

	constructor(
		boardElement: HTMLDivElement,
		statusElement: HTMLDivElement,
		resetButton: HTMLButtonElement
	) {
		this.boardElement = boardElement;
		this.statusElement = statusElement;
		this.resetButton = resetButton;

		this.game = new Game();
		this.initializeBoard();
		this.bindEvents();
		this.updateView();
	}

	private initializeBoard(): void {
		this.boardElement.innerHTML = '';
		for (let i = 0; i < 9; i++) {
			const cellElement = document.createElement('div');
			cellElement.classList.add(
				'cell',
				'bg-white',
				'bg-opacity-20',
				'rounded-lg',
				'w-24',
				'h-24',
				'flex',
				'items-center',
				'justify-center',
				'text-4xl',
				'font-bold',
				'cursor-pointer',
				'hover:bg-opacity-30'
			);
			cellElement.setAttribute('data-index', i.toString());
			this.boardElement.appendChild(cellElement);
		}
	}

	private bindEvents(): void {
		this.boardElement.addEventListener('click', (e: Event) => {
			const target = e.target as HTMLElement;
			if (target.classList.contains('cell')) {
				const index = parseInt(target.getAttribute('data-index')!);
                target.classList.add(this.game.currentPlayer === 'X' ? 'text-yellow-400' : 'text-green-400');
				if (this.game.makeMove(index)) {
					this.updateView();
				}
			}
		});

		this.resetButton.addEventListener('click', () => {
			this.game.reset();
            this.game.board.cells.forEach((cell, index) => {
                const cellElement = this.boardElement.children[index] as HTMLElement;
                cellElement.classList.remove('text-yellow-400', 'text-green-400');
            });
			this.updateView();
		});
	}

	private updateView(): void {
		this.game.board.cells.forEach((cell, index) => {
			const cellElement = this.boardElement.children[index] as HTMLElement;
			cellElement.textContent = cell.value || '';
		});

		let statusText: string;
		if (this.game.status === 'won') {
			statusText = `Player ${this.game.currentPlayer} wins!`;
		} else if (this.game.status === 'draw') {
			statusText = "It's a draw!";
		} else {
			statusText = `Player ${this.game.currentPlayer}'s turn`;
		}
		this.statusElement.textContent = statusText;
	}
}
