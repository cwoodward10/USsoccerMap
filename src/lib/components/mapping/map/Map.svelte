<script lang="ts">
    // get maplibre stuff
    import maplibregl from 'maplibre-gl';
    // get deck gl stuff
    import {MapboxLayer} from '@deck.gl/mapbox';
    import {Deck} from '@deck.gl/core';
    import {ArcLayer, ScatterplotLayer} from '@deck.gl/layers';
    // import svelte stff
    import { onMount } from 'svelte';

    const myDeckLayer = new MapboxLayer({
        id: 'my-scatterplot',
        type: ScatterplotLayer,
        data: [
            {position: [-74.5, 40], size: 100}
        ],
        getPosition: (d: any) => d.position,
        getRadius: (d: any) => d.size,
        getFillColor: [255, 0, 0]
    });

    onMount(() => {
        // create the maplibre map
        const map = new maplibregl.Map({
            accessToken: "",
            container: 'map',
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // stylesheet location
            center: [-122.4, 37.79],
            zoom: 15,
            pitch: 60
        });
        map.on('load', () => {
            const firstLabelLayerId = map.getStyle().layers.find(layer => layer.type === 'symbol').id;

            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "height"]
                    ],
                    'fill-extrusion-base': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "min_height"]
                    ],
                    'fill-extrusion-opacity': .6
                }
            }, firstLabelLayerId);

            map.addLayer(new MapboxLayer({
                id: 'deckgl-circle',
                type: ScatterplotLayer,
                data: [
                {position: [-122.402, 37.79], color: [255, 0, 0], radius: 1000}
                ],
                getPosition: (d: any) => d.position,
                getFillColor: (d: any) => d.color,
                getRadius: (d: any) => d.radius,
                opacity: 0.3
            }), firstLabelLayerId);

            map.addLayer(new MapboxLayer({
                id: 'deckgl-arc',
                type: ArcLayer,
                data: [
                {source: [-122.3998664, 37.7883697], target: [-122.400068, 37.7900503]}
                ],
                getSourcePosition: (d: any) => d.source,
                getTargetPosition: (d: any) => d.target,
                getSourceColor: [255, 208, 0],
                getTargetColor: [0, 128, 255],
                getWidth: 8
            }))
            });
    })
</script>

<section class="h-full w-full p-2">
    <div id="map" class="h-full w-full"/>
</section>>