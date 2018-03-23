import React from 'react';
import './timer.css';


//TIEMPO TRANSCURRIDO
function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}


function formattedTime(secs) {  //obtener los segundas y pasarlos a minutos
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${minutes} : ${leftPad(seconds.toString())}`
}
//TIEMPO TRANSCURRIDO

function Timer(props) {
  return (
    <div className="Timer">
      <p>
        <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
      </p>
    </div>
  )
}

export default Timer;