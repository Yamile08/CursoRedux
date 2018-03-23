import React from 'react';
import './search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => ( //tambien se puede crear el componente como un arrow function y no es necesario pasarle el return porque el ya lo hace por si solo
  <form
    className="Search"
    onSubmit={props.handleSubmit} //se le pasa el evento onSubmit
  >
    <input
      ref={props.setRef} //setRef ayuda a almacenar los valores del input
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search