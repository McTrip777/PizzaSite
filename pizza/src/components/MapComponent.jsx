import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent() {
    const [viewport, setViewport] = useState({
        latitude: (Math.random() * Math.floor(90) - (Math.random() * Math.floor(90))),
        longitude: (Math.random() * Math.floor(180) - (Math.random() * Math.floor(180))),
        width: "100%",
        height: "100%",
        zoom: 8
    })

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {

        // Style -> "mapbox://styles/jacobmcfaul/ckkaccwob0fo518nt2i6sotzg"
        const initializeMap = ({ setMap, mapContainer }) => {

            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [viewport.longitude, viewport.latitude], // starting position [lng, lat]
                zoom: viewport.zoom
            });
            map.on('load', () => {
                setMap(map)
                map.resize();
            });
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
            var marker = new mapboxgl.Marker()
            marker.setLngLat([viewport.longitude, viewport.latitude]).addTo(map);
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} className="mapContainer" />;
}

export default MapComponent
