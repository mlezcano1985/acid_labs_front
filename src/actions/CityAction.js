import { SHOW_CITY_WEATHER, HIDE_CITY_WEATHER } from "./ConstantsAction";

export function showCityWeather(city) {
    return {
        type: SHOW_CITY_WEATHER,
        payload: {
            show: true,
            city: city
        }
    };
}

export function hideCityWeather(city) {
    return {
        type: HIDE_CITY_WEATHER,
        payload: {
            show: false,
            city: city
        }
    };
}