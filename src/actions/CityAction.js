import { SHOW_CITY_WEATHER, HIDE_CITY_WEATHER } from "./ConstantsAction";

export function showCityWeather({lat, lng}) {
    return {
        type: SHOW_CITY_WEATHER,
        payload: {
            show: true,
            lat: lat,
            lng: lng
        }
    };
}

export function hideCityWeather() {
    return {
        type: HIDE_CITY_WEATHER,
        payload: {
            show: false,
            lat: null,
            lng: null
        }
    };
}