import React from 'react';
import './App.css';
import MapContainer from "./containers/MapContainer";
import CityContainer from "./containers/CityContainer";

function App() {
  document.title = 'Demo Acid Labs';
  return (
    <div>
      <MapContainer></MapContainer>
      <CityContainer></CityContainer>
    </div>
  );
}

export default App;
