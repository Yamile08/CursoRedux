import api from '../api.json'; //importar los datos de origen

import { normalize, schema } from 'normalizr';




// const media = new schema.Entity(key, definición de mi esquema, opciones)
const media = new schema.Entity('media', {}, { //Este esquema llama una clase que me va a dar la funcion schema
  idAttribute: 'id', //Si el Api no tiene el elemento Id en el elemento Id o por algun motivo se llama de otra manera se personaliza con el atributo idAttribute
   //El elemnto media va a extraer los ids de su key id con el atributo idAttribute
  processStrategy: (value, parent, key) => ({...value, category:parent.id })  //Que queremos tomar del padre y me vana venir tres parametros:
                                                                              // primero el valor de mi elemento donde viene el id , title , author todo lo que tiene mi media, 
                                                                              //segundo el padre que seria todo lo que tiene category que seria el padre de media y sus keys para poder extraer alguno
                                                                              // tercero el key de mi elemento que seria el Id 
 //luego le devuelvo como es que yo quiero que se conforme mi nuevo media y con value me va a traer todos lo datos que por defecto que ya tiene tiene media y para anexarle un nuevo key a mi elemento lo llamo category
 //y le digo que me traiga el Id del padre y como los datos del padre me llegan en parent entonces pongo parent.id
})


const category = new schema.Entity('categories', {
  playlist: new schema.Array(media) //en definicion del esquema aqui va a heredar mi elemento media
})


const categories = { categories: new schema.Array(category)}//Aqui se toma el key de categories y que reciba el schema de category 


const normalizedData = normalize(api, categories);  //obtener en una sola variable todo el esquema normalizado,y los datos que se le pasa a normalize son los datos de origen osea el api y el esquema final (categories)

export default normalizedData; //Datos normalizados que se van a exportar