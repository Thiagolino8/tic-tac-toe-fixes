<script lang="ts">
	import type { Player } from '../gameLogic.svelte';

	let { value }: { value: Player | null } = $props();
</script>

<button
	type="button"
	class="flex items-center justify-center w-24 h-24 text-4xl font-bold bg-white rounded-lg cursor-pointer cell bg-opacity-20 hover:bg-opacity-30"
	class:text-yellow-400={value === 'X'}
	class:text-green-400={value === 'O'}
	on:click
>
	{value || ''}
</button>
