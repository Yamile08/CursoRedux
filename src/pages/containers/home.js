import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
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
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
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
  //en la linea siguientevamos a utilizar metodos inmutables para remplazar esto state.data.categories.map((categoryId) por state.get('data').get('categories').map((categoryId) => {
    //PONEMOS .get PARA OBTENER UNA key DE MI MAPA POR QUE state SERIA EL MAPA PRINCIPAL QUE SERIA MI ESTADO INICIAL QUE TENDRIA UN key QUE SE LLAMA data
  const categories = state.get('data').get('categories').map((categoryId) => { //Mapiamos la lista para obtener esas categories, ese map recibe lo que tiene cada elemento que se esta iterando que seria el id de la category
    return state.get('data').get('entities').get('categories').get(categoryId) //Aqui se devuelve el objeto de la category
  })

  return {
    categories: categories,
    search: state.get('data').get('search')  
  }

}

export default connect(mapStateToProps)(Home)