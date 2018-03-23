import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {  //validar propiedades que me estan llegando con las propiedades que mi componente ya tiene y ver si hay algun cambio y segun eso ejecutar algo
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  setRef = element => {
    this.video = element;
  }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    } = this.props;

    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata} //obtener la duracion del video
          onTimeUpdate={handleTimeUpdate} //Actualizar el tiempo del video
          onSeeking={handleSeeking} //Me estoy moviendo(spinner) - el {handleSeeking} el manejador
          onSeeked={handleSeeking} //Ya me movi, ya termine de hacer ese movimiento(spinner) - el {handleSeeking} el manejador
        />
      </div>
    )
  }
}

export default Video;