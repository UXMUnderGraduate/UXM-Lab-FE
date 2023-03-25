import React from 'react';
import DownArrow from '../../assets/down-arrow.png';

const DownButton = (props) => {
  return (
    <button onClick={props.onMoveToElement} className='down-button'>
      <img src={DownArrow} alt='down-arrow' className='w-8 h-8 opacity-50' />
    </button>
  );
};

export default DownButton;
