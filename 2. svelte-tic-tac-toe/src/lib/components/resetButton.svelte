<script lang="ts">
	let { reset }: { reset: () => void } = $props();
</script>

<button
	onclick={reset}
	class="block w-full px-4 py-2 font-bold text-white transition duration-300 bg-black rounded bg-opacity-20 hover:bg-opacity-50 active:bg-opacity-40 active:duration-0"
>
	Restart
</button>
