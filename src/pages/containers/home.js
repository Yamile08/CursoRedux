import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

import { connect } from 'react-redux'; //Conectando datos a los componentes

class Home extends Component {
  state = { //como arranca nuestro modal, que no se ve
    modalVisible: false,
  }
  handleOpenModal = (media) => { //mostrara el video
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return (
      <HandleError> 
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
          />
          { //condicional, si el modal es 
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
              <VideoPlayer
                  autoplay
                  src={this.state.media.src}  //se pasa el src del video
                  title={this.state.media.title} //se pasa el titulo del video
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories
  }

}

export default connect(mapStateToProps)(Home) //Connect para enviarle nuevas propiedades a mi Home, propiedades que vienen desde mi store de Redux