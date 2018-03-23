import React from 'react';
import './spinner.css';

function Spinner(props) {
  if (!props.active) return null  //si no esta activo esta null y no se reenderea y si esta activo se muestra el cargando
  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  )
}

export default Spinner