<script lang="ts">
	import '../assets/tailwind.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header/>

<main class="fixed left-0 top-0 h-screen w-screen">
	<slot />
</main>

<footer class="absolute bottom-0 left-0 w-full z-10">
	<p class="flex mx-auto justify-center">This is a Test</p>
</footer>