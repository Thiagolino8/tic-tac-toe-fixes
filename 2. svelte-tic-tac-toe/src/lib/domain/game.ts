import { Board } from "./board";
import type { Player } from "./player";

export class Game {
    public board: Board;
    public players: [Player, Player];
    public currentPlayerIndex: 0 | 1;
    public status: 'ongoing' | 'won' | 'draw';

    constructor() {
        this.board = new Board();
        this.players = ['X', 'O'];
        this.currentPlayerIndex = 0;
        this.status = 'ongoing';
    }

    get currentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

    makeMove(cellIndex: number): boolean {
        if (this.status !== 'ongoing') return false;

        if (this.board.markCell(cellIndex, this.currentPlayer)) {
            const winner = this.board.getWinner();
            if (winner) {
                this.status = 'won';
                return true;
            } else if (this.board.isFull()) {
                this.status = 'draw';
                return true;
            } else {
                this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;
                return true;
            }
        }

        return false;
    }

    reset(): void {
        this.board = new Board();
        this.currentPlayerIndex = 0;
        this.status = 'ongoing';
    }
}
