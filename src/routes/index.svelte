<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import MapContainer from '$lib/mapping/MapContainer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="w-full h-full">
	<MapContainer/>
</section>