mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbm1hbmNpbmkiLCJhIjoiY2xnNXE5d2NlMDJxazNxcDhyc2g1eGo2eCJ9.9FsLDvuMxvT0C4cWbIsQAw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-73.97, 40.70],
    zoom: 10
})

map.on('style.load', function () {
    map.addSource('localbus_routes', {
        'type': 'geojson',
        'data': 'data/routes_localbus.geojson'
    }), map.addLayer({
        'id': 'fill-localbus_routes',
        'type': 'line',
        'source': 'localbus_routes',
        'layout': { 'visibility': 'none' },
        'paint': {
            'line-color': '#a0d568',
            'line-width': 0.5
        }
    }), map.on('click', 'fill-localbus_routes', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_id)
            .addTo(map);
    });

    map.addSource('subway_routes', {
        'type': 'geojson',
        'data': 'data/routes_subway.geojson'
    }), map.addLayer({
        'id': 'fill-subway_routes',
        'type': 'line',
        'source': 'subway_routes',
        'layout': { 'visibility': 'visible' },
        'paint': {
            'line-color': '#4fc1e8',
            'line-width': 1
        }
    }), map.on('click', 'fill-subway_routes', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_id)
            .addTo(map);
    });
    map.addSource('expressbus_routes', {
        'type': 'geojson',
        'data': 'data/routes_expressbus.geojson'
    }), map.addLayer({
        'id': 'fill-routes_expressbus',
        'type': 'line',
        'source': 'expressbus_routes',
        'layout': { 'visibility': 'none' },
        'paint': {
            'line-color': '#AC92EB',
            'line-width': 1
        }
    }), map.on('click', 'fill-routes_expressbus', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_id)
            .addTo(map);
    });
    map.addSource('lirr_routes', {
        'type': 'geojson',
        'data': 'data/routes_lirr.geojson'
    }), map.addLayer({
        'id': 'fill-routes_lirr',
        'type': 'line',
        'source': 'lirr_routes',
        'layout': { 'visibility': 'none' },
        'paint': {
            'line-color': '#ffce54',
            'line-width': 1
        }
    }), map.on('click', 'fill-routes_lirr', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_long)
            .addTo(map)
    })

    map.addSource('mnr_routes', {
        'type': 'geojson',
        'data': 'data/routes_metronorth.geojson'
    }), map.addLayer({
        'id': 'fill-routes_metronorth',
        'type': 'line',
        'source': 'mnr_routes',
        'layout': { 'visibility': 'none' },
        'paint': {
            'line-color': '#ed5564',
            'line-width': 1
        }
    }), map.on('click', 'fill-routes_metronorth', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_long)
            .addTo(map)
    }),
        map.addSource('local-bus-stops', {
            'type': 'geojson',
            'data': 'data/stops_localbus.geojson'
        }), map.addLayer({
            'id': 'fill-local-bus-stops',
            'type': 'circle',
            'source': 'local-bus-stops',
            'layout': { 'visibility': 'none' },
            'paint': {
                'circle-radius': 1,
                'circle-color': '#000000'
            }
        }), map.on('click', 'fill-local-bus-stops', (e) => {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.stop_name)
                .addTo(map)

        }), map.addSource('express-bus-stops', {
            'type': 'geojson',
            'data': 'data/stops_expressbus.geojson'
        }), map.addLayer({
            'id': 'fill-express-bus-stops',
            'type': 'circle',
            'source': 'express-bus-stops',
            'layout': { 'visibility': 'none' },
            'paint': {
                'circle-radius': 1,
                'circle-color': '#B42222'
            }
        }), map.on('click', 'fill-express-bus-stops', (e) => {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.stop_name)
                .addTo(map)
        })

    map.addSource('LIRR_stations', {
        'type': 'geojson',
        'data': 'data/stops_lirr.geojson'
    }), map.addLayer({
        'id': 'fill-LIRR_stations',
        'type': 'circle',
        'source': 'LIRR_stations',
        'layout': { 'visibility': 'none' },
        'paint': {
            'circle-radius': 1,
            'circle-color': '#B42222',
            'circle-opacity': .5
        }
    }), map.on('click', 'fill-LIRR_stations', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.stop_name)
            .addTo(map)

    }), map.addSource('MNR_stations', {
        'type': 'geojson',
        'data': 'data/stops_metronorth.geojson'
    }), map.addLayer({
        'id': 'fill-MNR_stations',
        'type': 'circle',
        'source': 'MNR_stations',
        'layout': { 'visibility': 'none' },
        'paint': {
            'circle-radius': 4,
            'circle-color': '#96b9f2'
        }
    }), map.on('click', 'fill-LIRR_stations', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.stop_name)
            .addTo(map)


    }), map.addSource('bayside_iso', {
        'type': 'geojson',
        'data': 'data/bayside_isochrone.geojson'
    }), map.addLayer({
        'id': 'fill-bayside',
        'type': 'fill',
        'source': 'bayside_iso',
        'layout': { 'visibility': 'none' },
        paint: {
            'fill-color': '#fcfcd2',
            'fill-opacity': 0.25
        }
    })
        , map.addSource('marinepark_iso', {
            'type': 'geojson',
            'data': 'data/marinepark_isochrone.geojson'
        }), map.addLayer({
            'id': 'fill-marine',
            'type': 'fill',
            'source': 'marinepark_iso',
            'layout': { 'visibility': 'none' },
            paint: {
                'fill-color': '#fcfcd2',
                'fill-opacity': .25
            }
        })
        , map.addSource('maspeth_iso', {
            'type': 'geojson',
            'data': 'data/maspeth_isochrone.geojson'
        }), map.addLayer({
            'id': 'fill-maspeth',
            'type': 'fill',
            'source': 'maspeth_iso',
            'layout': { 'visibility': 'none' },
            paint: {
                'fill-color': '#fcfcd2',
                'fill-opacity': .25
            }
        })
})

$('#fly-to-bayside').on('click', function () {
    map.flyTo({
        center: [-73.875, 40.75],
        zoom: 11.5
    }),
        map.setLayoutProperty('fill-subway_routes', 'visibility', 'none'),
        map.setLayoutProperty('fill-bayside', 'visibility', 'visible'),
        map.setLayoutProperty('fill-marine', 'visibility', 'none'),
        map.setLayoutProperty('fill-maspeth', 'visibility', 'none'),
        map.setLayoutProperty('fill-localbus_routes', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_expressbus', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_lirr', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_metronorth', 'visibility', 'visible')
})

$('#fly-to-marine').on('click', function () {
    map.flyTo({
        center: [-73.97, 40.627],
        zoom: 11.5
    }),
        map.setLayoutProperty('fill-subway_routes', 'visibility', 'none'),
        map.setLayoutProperty('fill-marine', 'visibility', 'visible'),
        map.setLayoutProperty('fill-maspeth', 'visibility', 'none'),
        map.setLayoutProperty('fill-bayside', 'visibility', 'none'),
        map.setLayoutProperty('fill-localbus_routes', 'visibility', 'visible'),
        map.setLayoutProperty('fill-subway_routes', 'visibility', 'none'),
        map.setLayoutProperty('fill-routes_expressbus', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_lirr', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_metronorth', 'visibility', 'visible')
})

$('#fly-to-maspeth').on('click', function () {
    map.flyTo({
        center: [-73.95655308825586, 40.72923636097061],
        zoom: 11.5
    }),
        map.setLayoutProperty('fill-subway_routes', 'visibility', 'none'),
        map.setLayoutProperty('fill-maspeth', 'visibility', 'visible'),
        map.setLayoutProperty('fill-marine', 'visibility', 'none'),
        map.setLayoutProperty('fill-bayside', 'visibility', 'none'),
        map.setLayoutProperty('fill-localbus_routes', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_expressbus', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_lirr', 'visibility', 'visible'),
        map.setLayoutProperty('fill-routes_metronorth', 'visibility', 'visible')
})

$('#fly-to-city').on('click', function () {
    map.flyTo({
        center: [-73.97, 40.70],
        zoom: 10
    }),
        map.setLayoutProperty('fill-subway_routes', 'visibility', 'visible'),
        map.setLayoutProperty('fill-maspeth', 'visibility', 'none'),
        map.setLayoutProperty('fill-marine', 'visibility', 'none'),
        map.setLayoutProperty('fill-bayside', 'visibility', 'none'),
        map.setLayoutProperty('fill-localbus_routes', 'visibility', 'none'),
        map.setLayoutProperty('fill-routes_expressbus', 'visibility', 'none'),
        map.setLayoutProperty('fill-routes_lirr', 'visibility', 'none'),
        map.setLayoutProperty('fill-routes_metronorth', 'visibility', 'none')
})