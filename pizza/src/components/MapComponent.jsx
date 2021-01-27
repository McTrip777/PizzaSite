import React, { useState } from "react";
import MapGL, { Marker } from 'react-map-gl';

function MapComponent() {

    const [viewport, setViewport] = useState({
        latitude: 43.61763907905514,
        longitude: -116.39117822157824,
        width: "100%",
        height: "100%",
        zoom: 15
    })
    // console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
    return (
        <div className="mapContainer">
            <MapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                // mapStyle="mapbox://styles/jacobmcfaul/ckkaccwob0fo518nt2i6sotzg"
                onViewportChange={viewport => { setViewport(viewport) }}>
                <Marker latitude={43.61763907905514} longitude={-116.39117822157824}>
                    <a target="_blank"
                        href="https://www.google.com/maps/place/Johnny's+Pizza/@43.6177695,-116.3911977,19.14z/data=!4m12!1m6!3m5!1s0x54ae538d04a0c13f:0x40f2531f811a14b!2sJohnny's+Pizza!8m2!3d43.61764!4d-116.3911832!3m4!1s0x54ae538d04a0c13f:0x40f2531f811a14b!8m2!3d43.61764!4d-116.3911832">
                        <i className="fas fa-map-marker-alt" />
                    </a>
                </Marker>
            </MapGL>
        </div>
    );

}

export default MapComponent
