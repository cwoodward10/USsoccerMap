<script lang="ts">
    import 'mapbox-gl/dist/mapbox-gl.css';
	import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { onMount } from 'svelte';
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNldm9sdmVsYWIiLCJhIjoiY2tzZzZ1ODJkMDByMjJvcGdxNWR3NzI2cyJ9.c4tHHpwpkXydQnnv9uplzA';
    onMount(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    })
</script>

<section class="h-full w-full p-2">
    <div id="map" class="h-full w-full"/>
</section>>