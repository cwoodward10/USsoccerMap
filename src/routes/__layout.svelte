<script lang="ts">
	import Header from '../components/header/Header.svelte';
	import '../assets/tailwind.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="absolute bottom-0 left-0 w-full">
	<p class="flex mx-auto justify-center">This is a Test</p>
</footer>