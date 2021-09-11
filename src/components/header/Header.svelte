<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="flex justify-between w-full">
	<div>
		<img src={logo} alt="SvelteKit"/>
	</div>

	<nav>
		<ul class="flex f-row space-x-3">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>
</header>