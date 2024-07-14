import { handleMove, resetGameState, gameState } from './gameLogic';

export function createBoard(boardElement: HTMLDivElement): void {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bg-white', 'bg-opacity-20', 'rounded-lg', 'w-24', 'h-24', 'flex', 'items-center', 'justify-center', 'text-4xl', 'font-bold', 'cursor-pointer', 'hover:bg-opacity-30', 'transition', 'duration-300', 'transition-colors', 'duration-300', 'text-transparent');
        cell.setAttribute('data-index', i.toString());
        cell.addEventListener('click', (e) => handleCellClick(e, boardElement.nextElementSibling as HTMLDivElement));
        boardElement.appendChild(cell);
    }
}

function handleCellClick(e: Event, statusElement: HTMLDivElement): void {
    const clickedCell = e.target as HTMLDivElement;
    const cellIndex = parseInt(clickedCell.getAttribute('data-index') || '-1');

    handleMove(cellIndex, statusElement);
    updateCell(clickedCell);
}

function updateCell(cell: HTMLDivElement): void {
    const index = parseInt(cell.getAttribute('data-index') || '-1');
    cell.textContent = gameState.board[index];
    cell.classList.add(gameState.board[index] === 'X' ? 'text-yellow-400' : 'text-green-400');
}

export function resetGame(boardElement: HTMLDivElement, statusElement: HTMLDivElement): void {
    resetGameState();
    statusElement.textContent = `Player ${gameState.currentPlayer}'s turn`;
    boardElement.querySelectorAll('div').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('text-yellow-400', 'text-green-400');
    });
}