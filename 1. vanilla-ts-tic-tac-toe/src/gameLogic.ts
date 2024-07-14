import { GameState, WinningCondition } from './types';

export const winningConditions: WinningCondition[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export let gameState: GameState = {
    currentPlayer: 'X',
    board: ['', '', '', '', '', '', '', '', ''],
    gameActive: true
};

export function initializeGame(statusElement: HTMLDivElement): void {
    updateStatus(statusElement);
}

export function handleMove(index: number, statusElement: HTMLDivElement): void {
    if (gameState.board[index] !== '' || !gameState.gameActive) return;

    gameState.board[index] = gameState.currentPlayer;
    checkResult(statusElement);
}

function checkResult(statusElement: HTMLDivElement): void {
    const roundWon = checkWinningCondition();

    if (roundWon) {
        updateStatus(statusElement, `Player ${gameState.currentPlayer} wins!`);
        gameState.gameActive = false;
        return;
    }

    if (!gameState.board.includes('')) {
        updateStatus(statusElement, 'Game ended in a draw!');
        gameState.gameActive = false;
        return;
    }

    gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
    updateStatus(statusElement);
}

function checkWinningCondition(): boolean {
    return winningConditions.some(([a, b, c]) => 
        gameState.board[a] &&
        gameState.board[a] === gameState.board[b] &&
        gameState.board[a] === gameState.board[c]
    );
}

export function resetGameState(): void {
    gameState = {
        currentPlayer: 'X',
        board: ['', '', '', '', '', '', '', '', ''],
        gameActive: true
    };
}

function updateStatus(statusElement: HTMLDivElement, message?: string): void {
    statusElement.textContent = message || `Player ${gameState.currentPlayer}'s turn`;
}