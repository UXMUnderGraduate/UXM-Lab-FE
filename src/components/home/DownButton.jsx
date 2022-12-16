import React from 'react';
import Arrow from '../../assets/down-arrow.png';

const DownButton = (props) => {
  return (
    <button onClick={props.onMoveToElement} className='down-button'>
      <img src={Arrow} alt='arrow' className='w-8 h-8' />
    </button>
  );
};

export default DownButton;
