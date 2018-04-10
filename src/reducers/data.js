function data(state, action) {  //creamos la funcion que recibe dos parametros state y action
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query
      const list = state.data.categories[2].playlist;
      const results = list.filter((item) => {
        return item.author.includes(action.payload.query)
      })
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