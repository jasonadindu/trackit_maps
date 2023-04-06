'use strict';

const mapBox = document.getElementById('map')


mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb25hZGluZHUiLCJhIjoiY2xnMTBwZzgwMDJvcjNkb2Y2b2Z6ZnJkYSJ9.ch_rX2LMJH7Smg6T5ajplg';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-97.1505, 49.7953], // starting position [lng, lat]
        zoom: 8, // starting zoom
        });

        function getLocation(position) {
            const {latitude, longitude } = position.coords;
        }

        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(
            new mapboxgl.GeolocateControl ({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
            })
            );

        const marker1 = new mapboxgl.Marker()
        .setLngLat([-97.135, 49.808])
        .addTo(map);

        const marker2 = new mapboxgl.Marker({color: 'red', rotate: 45})
        .setLngLat([-97.10961, 49.82870])
        .addTo(map);


