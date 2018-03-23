import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return (
    <button //icono del volumen
      className="Volume"
    >
      <VolumenIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input  //Barra de volumen
          type="range"
          min={0} //volumen minimo
          max={1} //Volumen maximo
          step={.05} //pasos en los que se va a mover el volumen 
          onChange={props.handleVolumeChange}  //cambio de rango, para poder cambiar el volumen - el ejecuta una funcion handleVolumeChange que viene por propiedades
        />
      </div>
    </button>
  )
}

export default Volume;