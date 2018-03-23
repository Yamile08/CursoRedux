import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: ''
  }
  handleSubmit = event => { //para prevenir que la pagina recarge
    event.preventDefault();
    console.log(this.input.value, 'submit')

  }
  setInputRef = element => { //esta funcion recibe el elemento html como parametro
    this.input = element; //el elemento es este input
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef} 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer;