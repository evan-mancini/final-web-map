mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbm1hbmNpbmkiLCJhIjoiY2xnNXE5d2NlMDJxazNxcDhyc2g1eGo2eCJ9.9FsLDvuMxvT0C4cWbIsQAw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-73.91770592106197, 40.70528610017079],
    zoom: 10.75
})

map.on('style.load', function () {

    map.addSource('subway_routes', {
        'type': 'geojson',
        'data': 'data/routes_subway.geojson'
    }), map.addLayer({
        'id': 'fill-subway_routes',
        'type': 'line',
        'source': 'subway_routes',
        'layout': {},
        'paint': {
            'line-color': '#546bff',
            'line-width': 3
        }
    }), map.on('click', 'fill-subway_routes', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.route_id)
            .addTo(map);
    });
})

$('#fly-to-bayside').on('click', function () {
    map.flyTo({
        center: [-73.76430045862422, 40.771418928210714],
        zoom: 12.5
    }),
    map.addSource('localbus_routes', {
        'type': 'geojson',
        'data': 'data/routes_localbus.geojson'
    }), map.addLayer({
        'id': 'fill-localbus_routes',
        'type': 'line',
        'source': 'localbus_routes',
        'layout': {},
        'paint': {
            'line-color': '#b6d9b8',
            'line-width': 3
        }
    }), map.on('click', 'fill-localbus_routes', (e) => {
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
        'layout': {},
        'paint': {
            'line-color': '#6b095c',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#ff0004',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#e1ff00',
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
            'layout': {},
            'paint': {
                'circle-radius': 1,
                'circle-color': '#B42222'
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
            'layout': {},
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
            'layout': {},
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
        'layout': {},
        'paint': {
            'circle-radius': 4,
            'circle-color': '#96b9f2'
        }
    }), map.on('click', 'fill-LIRR_stations', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.stop_name)
            .addTo(map)


}) , map.addSource('bayside_iso', {
    'type': 'geojson',
    'data': 'data/bayside_isochrone.geojson'
}), map.addLayer({
    'id': 'fill-bayside',
    'type': 'fill',
    'source': 'bayside_iso',
    'layout': {},
    paint: {
        'fill-color': '#FF0000',
        'fill-opacity': 0.5
      }
})
})

$('#fly-to-marine').on('click', function () {
    map.flyTo({
        center: [-73.9335657922829, 40.61153404163023],
        zoom: 12.5
    }),
    map.addSource('localbus_routes', {
        'type': 'geojson',
        'data': 'data/routes_localbus.geojson'
    }), map.addLayer({
        'id': 'fill-localbus_routes',
        'type': 'line',
        'source': 'localbus_routes',
        'layout': {},
        'paint': {
            'line-color': '#b6d9b8',
            'line-width': 3
        }
    }), map.on('click', 'fill-localbus_routes', (e) => {
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
        'layout': {},
        'paint': {
            'line-color': '#6b095c',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#ff0004',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#e1ff00',
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
            'layout': {},
            'paint': {
                'circle-radius': 1,
                'circle-color': '#B42222'
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
            'layout': {},
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
            'layout': {},
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
        'layout': {},
        'paint': {
            'circle-radius': 4,
            'circle-color': '#96b9f2'
        }
    }), map.on('click', 'fill-LIRR_stations', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.stop_name)
            .addTo(map)


}) ,  map.addSource('marinepark_iso', {
    'type': 'geojson',
    'data': 'data/marinepark_isochrone.geojson'
}), map.addLayer({
    'id': 'fill-marine',
    'type': 'fill',
    'source': 'marinepark_iso',
    'layout': {},
    paint: {
        'fill-color': '#4287f5',
        'fill-opacity': .5
      }
})
})

$('#fly-to-maspeth').on('click', function () {
    map.flyTo({
        center: [-73.90655308825586, 40.72923636097061],
        zoom: 12.5
    }),
    map.addSource('localbus_routes', {
        'type': 'geojson',
        'data': 'data/routes_localbus.geojson'
    }), map.addLayer({
        'id': 'fill-localbus_routes',
        'type': 'line',
        'source': 'localbus_routes',
        'layout': {},
        'paint': {
            'line-color': '#b6d9b8',
            'line-width': 3
        }
    }), map.on('click', 'fill-localbus_routes', (e) => {
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
        'layout': {},
        'paint': {
            'line-color': '#6b095c',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#ff0004',
            'line-width': 3
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
        'layout': {},
        'paint': {
            'line-color': '#e1ff00',
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
            'layout': {},
            'paint': {
                'circle-radius': 1,
                'circle-color': '#B42222'
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
            'layout': {},
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
            'layout': {},
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
        'layout': {},
        'paint': {
            'circle-radius': 4,
            'circle-color': '#96b9f2'
        }
    }), map.on('click', 'fill-LIRR_stations', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.stop_name)
            .addTo(map)

}) , map.addSource('maspeth_iso', {
    'type': 'geojson',
    'data': 'data/maspeth_isochrone.geojson'
}), map.addLayer({
    'id': 'fill-maspeth',
    'type': 'fill',
    'source': 'maspeth_iso',
    'layout': {},
    paint: {
        'fill-color': '#c6db07',
        'fill-opacity': .5
      }
}),

$('#fly-to-city').on('click', function () {
    map.flyTo({
        center: [-73.91770592106197, 40.70528610017079],
        zoom: 10.5
    }),
    map.removeLayer('fill-maspeth')
})})