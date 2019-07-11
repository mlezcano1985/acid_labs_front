import React from 'react';
import Config from '../Config'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const key = Config.mapKey;

export const GoogleMap = ({ google, onClick }) => {
    const style = {
        width: '100%',
        height: '100%'
    }

    return(
        <Map 
            google={google} 
            zoom={1}
            minZoom={1}
            initialCenter={{
                lat: 0,
                lng: 0
            }}
            style={style}
            scrollwheel={false}
            disableDefaultUI={true}
            draggable={false}
            disableDoubleClickZoom={true}
            scaleControl={false}
            mapTypeControl={false}
            onClick={onClick}
        >
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: key
})(GoogleMap);