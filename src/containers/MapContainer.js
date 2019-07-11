import { connect } from 'react-redux'
import { showCityWeather } from '../actions'
import GoogleApiWrapper from '../components/GoogleMap'

/**
 * 
 * @param {any} state 
 */
const mapStateToProps  = (state) =>({
    google: window.google
})

/**
 * 
 * @param {Function} dispatch 
 */
const mapDispatchToProps = (dispatch) => ({
    onClick: (mapProps, map, clickEvent) => {
        console.log(clickEvent);
        dispatch(showCityWeather({
            lat: clickEvent.latLng.lat(),
            lng: clickEvent.latLng.lng()
        }));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleApiWrapper);
