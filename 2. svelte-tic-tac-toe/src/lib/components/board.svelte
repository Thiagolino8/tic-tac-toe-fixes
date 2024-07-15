<script lang="ts">
	import Cell from './cell.svelte';
	import type { Cell as CellType } from '../gameLogic.svelte';

	let { board, makeMove }: { board: CellType[]; makeMove(i: number): void } = $props();
</script>

<div class="grid grid-cols-3 gap-4 mb-6">
	{#each board as cell, i}
		<Cell value={cell} on:click={() => makeMove(i)} />
	{/each}
</div>
