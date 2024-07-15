<script lang="ts">
	import type { Player, GameStatus } from '../gameLogic.svelte';

	let {currentPlayer, gameStatus}: {currentPlayer :Player, gameStatus: GameStatus} = $props();
</script>

<div class="mb-4 text-2xl text-center text-white animate-pulse">
	{#if gameStatus === 'won'}
		Player {currentPlayer} wins!
	{:else if gameStatus === 'draw'}
		It's a draw!
	{:else}
		Player {currentPlayer}'s turn
	{/if}
</div>
