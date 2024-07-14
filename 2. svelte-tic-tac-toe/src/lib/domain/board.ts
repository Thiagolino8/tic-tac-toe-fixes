import { Cell } from './cell';
import type { Player } from './player';

export class Board {
	public cells: Cell[];

	constructor() {
		this.cells = Array.from({ length: 9 }, (_, index) => new Cell(index));
	}

	markCell(index: number, player: Player): boolean {
		return this.cells[index].mark(player);
	}

	isFull(): boolean {
		return this.cells.every((cell) => cell.value !== null);
	}

	getWinner(): 'X' | 'O' | null {
		const winPatterns: number[][] = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Rows
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Columns
			[0, 4, 8],
			[2, 4, 6] // Diagonals
		];

		for (let pattern of winPatterns) {
			const [a, b, c] = pattern;
			if (
				this.cells[a].value &&
				this.cells[a].value === this.cells[b].value &&
				this.cells[a].value === this.cells[c].value
			) {
				return this.cells[a].value;
			}
		}

		return null;
	}
}
