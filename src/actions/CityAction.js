import { SHOW_CITY_WEATHER } from "./ConstantsAction";

export function showCityWeather(payload) {
    return {
        type: SHOW_CITY_WEATHER,
        payload
    };
}