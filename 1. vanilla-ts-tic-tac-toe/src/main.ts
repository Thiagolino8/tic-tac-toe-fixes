import './style.css';
import { createBoard, resetGame } from './domManipulation';
import { initializeGame } from './gameLogic';

const board = document.getElementById('board') as HTMLDivElement;
const status = document.getElementById('status') as HTMLDivElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

createBoard(board);
initializeGame(status);

resetButton.addEventListener('click', () => resetGame(board, status));