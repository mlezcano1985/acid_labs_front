import { connect } from 'react-redux';
import { City } from '../components/City';

/**
 * 
 * @param {any} state 
 */
const mapStateToProps  = (state) =>({
    city: state.payload
});

export default connect(
    mapStateToProps
)(City);