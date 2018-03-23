// Importamos dependencias de React
import React from 'react'; //React es la dependencia para crear nuestros componentes, las piezas de la aplicación
import { render } from 'react-dom';  //react-dom nos sirve para renderizar esos componentes en el navegador
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist'; //llamar y/o importar a media
import data from '../api.json';

const homeContainer = document.getElementById('home-container'); // Referenciamos un elemento con ID home-container

// const holaMundo = <h1>Hola yamile</h1>; // Insertamos en una constante lo que queremos renderizar

//ReactDOM.render(que voy a renderizar, donde lo hare);
render( <Home data={data} />, homeContainer); //la propiedad data va a recibir los datos que vienen desde el api.json

