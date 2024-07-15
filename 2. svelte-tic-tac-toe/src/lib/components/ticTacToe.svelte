<script lang="ts">
	import Board from './board.svelte';
	import Status from './status.svelte';
	import ResetButton from './resetButton.svelte';
	import { createGame, type Game } from '$lib/gameLogic.svelte';

    let game: Game = createGame();
</script>

<div class="p-8 bg-white shadow-lg bg-opacity-10 rounded-xl">
	<h1
		class="mb-6 text-4xl font-bold text-center text-purple-100 text-shadow bg-clip-text drop-shadow"
	>
		Tic Tac Toe
	</h1>
	<Board board={game.board} makeMove={game.makeMove} />
	<Status currentPlayer={game.currentPlayer} gameStatus={game.gameStatus} />
	<ResetButton reset={game.reset} />
</div>
