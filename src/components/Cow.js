import React from 'react';
import cow from '../cow.png';

const Cow = () => {

  return (
    <div className="centerScreen cow" >
      <img src={cow} alt="cow" style={{width: 100, height: 100}} />
    </div>
  )
}

export default Cow
