function data(state, action) {  //creamos la funcion que recibe dos parametros state y action /SE ESTA CREANDO EL REDUCER
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query
      let results = [];
      if (action.payload.query) {
        const list = state.data.categories[2].playlist; //Hace una busqueda dentro del api
        results = list.filter((item) => {
          return item.author.includes(action.payload.query)
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data;
