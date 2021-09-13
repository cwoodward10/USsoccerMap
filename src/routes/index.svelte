<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Map from '$lib/mapping/map/Map.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="w-full h-full">
	<Map/>
</section>