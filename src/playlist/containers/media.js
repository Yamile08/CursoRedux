import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component {
  render(){
    return <Media {...this.props.data.toJS()} /> //aqui le pasamos todos esos datos a media
  }
}

function mapStateToProps(state, props) { //voy a mapiar mi estado y lo voy a convertir en propiedades que voy a enviar a mi componente 
  return {
    data: state.get('data').get('entities').get('media').get(props.id) //hasta media obtenemos el objeto con todos nuestros elementos de video y en props.id vamos a tener ese id que estamos buscando
  }
}

export default connect(mapStateToProps)(MediaContainer)