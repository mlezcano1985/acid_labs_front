import { SHOW_CITY_WEATHER, HIDE_CITY_WEATHER } from '../actions'

const initialState = {
    show: false,
    city: null
}

export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CITY_WEATHER:
            return action.payload;
            
        case HIDE_CITY_WEATHER:
            return initialState;            
    
        default:
            return state;
    }
}