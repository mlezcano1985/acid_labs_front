import { SHOW_CITY_WEATHER } from '../actions'

export const cityReducer = (state = SHOW_CITY_WEATHER, action) => {
    debugger;
    switch (action.type) {
        case SHOW_CITY_WEATHER:
            return action.payload;
    
        default:
            return state;
    }
}