export type Player = 'X' | 'O';

export interface GameState {
    currentPlayer: Player;
    board: string[];
    gameActive: boolean;
}

export type WinningCondition = [number, number, number];