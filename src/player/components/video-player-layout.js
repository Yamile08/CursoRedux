
import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
  <div
    className="VideoPlayer"
    ref={props.setRef}  //vamos a setiar la referencia este elemento que envuelve todo mi reproductor
  >
    {props.children}
  </div>
)

export default VideoPlayerLayout