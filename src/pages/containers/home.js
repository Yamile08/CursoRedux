import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

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
            categories={this.props.data.categories}
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

export default Home