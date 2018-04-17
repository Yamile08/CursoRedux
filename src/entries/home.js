import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
//import data from '../schemas/index.js'; //Normalizando Datos
// console.log('Hola mundo!' )
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/index';

//console.log(data); //Normalizando Datos

// const initialState = {
//   data: { //1er reducer donde se manejaran solo datos y busquedas
//       // ...data,
//       entities: data.entities, //a los elementos de busqueda se les llama entities-entidades
//       categories: data.result.categories, 
//       search: [],
//   },
//   modal: { //2do reducer donde se manejara la UI
//       visibility: false,
//       mediaId: null,
//     }
//   }

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);