import React from 'react';
import './progress-bar.css';

function ProgressBar(props) {
  return (
    <div className="ProgressBar">
      <input  //input de rango - Barra de progreso del video
        type="range"
        min={0}
        max={props.duration}
        value={props.value} //el valor del elemento en tiempo real
        onChange={props.handleProgressChange}  //cambiar los tiempos del video
      />
    </div>
  )
}


export default ProgressBar