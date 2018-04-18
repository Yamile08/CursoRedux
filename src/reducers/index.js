import data from './data';
import modal from './modal';

//import { combineReducers } from 'redux'; //funcion de redux que combina reducers
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({ //combinacion de reducers data y modal

  data,
  modal
})

export default rootReducer  //este es el reducer que resulto de la combinacion data y modal sera exportado e importarlo dentro de home 