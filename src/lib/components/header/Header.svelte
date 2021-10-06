<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="fixed top-0 flex justify-between w-full z-10">
	<div>
		<h1 class="text-left font-medium text-xl text-white">USMNT Map</h1>	
	</div>

	<nav>
		<ul class="flex f-row space-x-3">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>
</header>