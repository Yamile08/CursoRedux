// Importamos dependencias de React
import React from 'react'; //React es la dependencia para crear nuestros componentes, las piezas de la aplicación
import { render } from 'react-dom';  //react-dom nos sirve para renderizar esos componentes en el navegador
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist'; //llamar y/o importar a media
import data from '../api.json';
import { Provider } from 'react-redux'; //Provider es un componente de orden superior que sirve para heredar elementos a los componentes hijos.

import { createStore } from 'redux';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());


const homeContainer = document.getElementById('home-container'); // Referenciamos un elemento con ID home-container

// const holaMundo = <h1>Hola yamile</h1>; // Insertamos en una constante lo que queremos renderizar

//ReactDOM.render(que voy a renderizar, donde lo hare);
render(
    <Provider store={store}>
      <Home />
    </Provider>
  , homeContainer);
   //la propiedad data va a recibir los datos que vienen desde el api.json

