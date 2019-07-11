import { connect } from 'react-redux';
import { City } from '../components/City';
import { hideCityWeather } from '../actions';

/**
 * 
 * @param {any} state 
 * @param {any} ownProps 
 */
const mapStateToProps = (state) =>({
   ...state.cityReducer
});

/**
 * 
 * @param {Function} dispatch 
 */
const mapDispatchToProps = (dispatch) => ({
    handleClose: () => {
        console.log('close');
        dispatch(hideCityWeather(null));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);