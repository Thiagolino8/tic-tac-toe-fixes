<script lang="ts">
	import { onMount } from 'svelte';
	import { GameApplication } from '$lib/gameApplication';

	let board: HTMLDivElement;
	let status: HTMLDivElement;
	let resetButton: HTMLButtonElement;

	onMount(() => {
		new GameApplication(board, status, resetButton);
	});
</script>

<div
	class="flex items-center justify-center min-h-screen font-sans bg-gradient-to-tr from-purple-500 to-blue-500"
>
	<div class="p-8 bg-white shadow-lg bg-opacity-10 rounded-xl">
		<h1
			class="mb-6 text-4xl font-bold text-center text-purple-100 text-shadow bg-clip-text drop-shadow"
		>
			Tic Tac Toe
		</h1>
		<div bind:this={board} class="grid grid-cols-3 gap-4 mb-6"></div>
		<div bind:this={status} class="mb-4 text-2xl text-center text-white animate-pulse"></div>
		<button
			bind:this={resetButton}
			class="block w-full px-4 py-2 font-bold text-white transition duration-300 bg-black rounded bg-opacity-20 hover:bg-opacity-50 active:bg-opacity-40 active:duration-0"
		>
			Restart
		</button>
	</div>
</div>
