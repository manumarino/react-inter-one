import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Animacion from './components/container/components/Animacion.jsx';
import { Select, MenuItem } from "@mui/material";
import { opcionesRadar } from './models/animacion.enum';
import SizeControl from './components/container/components/SizeControl';


function App() {
  const originalSize = 600
  const opcionesEleccion = opcionesRadar;
  const [imageSize, setImageSize] = useState(originalSize); 

const [opcionSeleccionada, setOpcionSeleccionada] = useState(opcionesEleccion[0].valor);

const handleSelectChange = (event) => {
  setOpcionSeleccionada(event.target.value);
};


const handleSizeChange = (event, value) => {
  setImageSize(value);
};


  return (
    <div >
      <Select value={opcionSeleccionada} onChange={handleSelectChange}>
        {opcionesEleccion.map((opcion) => (
          <MenuItem key={opcion.valor} value={opcion.valor}>
            {opcion.nombre}
          </MenuItem>
        ))}
      </Select>
      <SizeControl size={imageSize} originalSize={originalSize} onChange={handleSizeChange} />
            {console.log(opcionSeleccionada)}
      <Animacion baseUrl={opcionSeleccionada} imageSize={imageSize} />

    </div>
  );
}

export default App;
