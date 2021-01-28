import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
// import ReactMapGL, { Marker } from 'react-map-gl';

function MapComponent() {

    const [viewport, setViewport] = useState({
        latitude: 43.61763907905514,
        longitude: -116.39117822157824,
        width: "100%",
        height: "100%",
        zoom: 15
    })
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {

        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
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
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} className="mapContainer" />;

    // console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
    // return (
    //     <div className="mapContainer">
    //         <div ref={el => (mapContainer.current = el)} style={styles} />;
    //         {/* <ReactMapGL {...viewport}
    //             mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    //             // mapStyle="mapbox://styles/jacobmcfaul/ckkaccwob0fo518nt2i6sotzg"
    //             onViewportChange={nextViewport => { setViewport(nextViewport) }}>
    //             <Marker latitude={43.61763907905514} longitude={-116.39117822157824}>
    //                 <a target="_blank"
    //                     href="https://www.google.com/maps/place/Johnny's+Pizza/@43.6177695,-116.3911977,19.14z/data=!4m12!1m6!3m5!1s0x54ae538d04a0c13f:0x40f2531f811a14b!2sJohnny's+Pizza!8m2!3d43.61764!4d-116.3911832!3m4!1s0x54ae538d04a0c13f:0x40f2531f811a14b!8m2!3d43.61764!4d-116.3911832">
    //                     <i className="fas fa-map-marker-alt" />
    //                 </a>
    //             </Marker>
    //         </ReactMapGL> */}
    //     </div>
    // );

}

export default MapComponent
