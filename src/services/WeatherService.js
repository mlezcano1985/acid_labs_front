import axios from "axios";
import Config from '../Config';

axios.defaults.baseURL = `${Config.baseUrl}`;

export class WeatherService {

    /**
     * 
     * @param {string} city 
     * @param {string} lat 
     * @param {string} lng 
     */
    static async getCity(city, lat, lng) {
        try {
            const resp = await axios.get(`/api/weather/city`, {
                params: {
                    city,
                    lat,
                    lng
                }
            });
            return resp.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}