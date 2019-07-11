import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "./Config"
import bus from "./services/BusService";

axios.defaults.baseURL = `${Config.baseUrl}`;

const Weather = (props) => {

    const city = props.city;
    let [loading, setLoading] = useState(true);
    let [model, setModel] = useState({});

    const load = async () => {
        try {
            const resp = await axios.get(`/weather?city=${city}`);
            return resp.data;
        } catch (err) {
            return null;
        }
        
    };

    const fetch = async () => {
        model = await load();
        setModel(model);
        setLoading(false);
    };

    const listener = () => {
        bus.on(city, (model) => {
            console.log('on: ', city, model);
            setModel(model);
        });
    };

    useEffect(() => {
        fetch();
        listener();
    }, []);    

    return (
        <div className="weather">
            {loading && <div>Cargando...</div>}
            { !loading && !model && <div>Error al cargar</div>}
            { !loading && model && 
                <div>
                    <h1>{city}</h1>
                    <div>
                        <strong>Temperatura: </strong>
                        <span>{Math.floor(model.currently.temperature)}&deg;F</span>
                    </div>
                    <div>
                        <strong>Hora: </strong>
                        <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Weather;