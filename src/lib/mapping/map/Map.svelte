<script lang="ts">
    import 'mapbox-gl/dist/mapbox-gl.css';
    import maplibregl from 'maplibre-gl';
    import { onMount } from 'svelte';

    onMount(() => {
        var map = new maplibregl.Map({
            accessToken: "",
            container: 'map',
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // stylesheet location
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    })
</script>

<section class="h-full w-full p-2">
    <div id="map" class="h-full w-full"/>
</section>>