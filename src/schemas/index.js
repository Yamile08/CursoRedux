import api from '../api.json'; //importar los datos de origen

import { normalize, schema } from 'normalizr';




// const media = new schema.Entity(key, definición de mi esquema, opciones)
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category:parent.id })
})


const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})


const categories = { categories: new schema.Array(category)}


const normalizedData = normalize(api, categories);  //obtener en una sola variable todo el esquema normalizado,y los datos que se le pasa a normalize son los datos de origen osea el api y el esquema final (categories)

export default normalizedData; //Datos normalizados que se van a exportar