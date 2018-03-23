import React, { Component } from 'react';
import { createPortal } from 'react-dom'; //Para crear un portal, se debe importar el metodo createPortal de react-dom

class ModalContainer extends Component {  //Portales es la manera en la que podemos renderizar componentes fuera del contenedor principal de la aplicación
  render() {
    return createPortal(
      this.props.children, //es Lo que se va a renderizar
      document.getElementById('modal-container') //donde se va a renderizar
    )
  }
}

export default ModalContainer;