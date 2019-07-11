import React, {useState, useEffect} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { WeatherService } from '../services/WeatherService';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	progress: {
	  margin: theme.spacing(2),
	},
  }));

export const City = ({ show, lat, lng, handleClose }) => {

	let [loading, setLoading] = useState(!show);
	let [model, setModel] = useState({});
	let [address, setAddress] = useState({});

	const classes = useStyles();

	const load = async () => {
		const address = await getCity();
		setAddress(address);
		return WeatherService.getCity(address.city, lat, lng);
	}

	const fetch = async () => {
		setLoading(true);
        model = await load();
        setModel(model);
        setLoading(false);
    };

	const getCity = async () => {
		return new Promise((resolve, reject) => {
			const geocoder = new window.google.maps.Geocoder();
			geocoder.geocode({'location': {lat: lat, lng: lng}}, (results, status) => {
				if (status === window.google.maps.GeocoderStatus.OK) {
					const r = results.find(re => {
						const f = re.types.find(t => t === "administrative_area_level_1")
						if(f) {
							return re;
						}
						else {
							return undefined;
						}
					});
	
					if(r) {
						console.log('address: ', r.formatted_address);
						resolve({
							city: r.place_id,
							formatted_address: r.formatted_address
						});
					}					
				  }
			});
		});
	};

	useEffect(() => {
		if (show) {
			fetch();
		}
	}, [show]);	

	return (
		<Dialog
			open={!!show}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			{/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
			<DialogContent style={{textAlign: "center"}}>				
					{loading && <CircularProgress className={classes.progress} />}
					{ !loading && !model && <div>Error al cargar</div>}
					{ !loading && model && 
					<div>
						<h1>{address.formatted_address}</h1>
						<div>
							<strong>Temperatura: </strong>
							<span>{Math.floor(model.currently.temperature)}&deg;F</span>
						</div>
						<div>
							<strong>Pronóstico: </strong>
							<span>{model.currently.summary}</span>
						</div>
					</div>
				}
			</DialogContent>
		</Dialog>
	)
};