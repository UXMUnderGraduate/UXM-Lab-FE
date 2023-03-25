import React from 'react';
import DownArrow from '../../assets/down-arrow.png';
import Image from 'next/image';

interface DownButtonProps {
  onMoveToElement: () => void;
}

const DownButton: React.FC<DownButtonProps> = (props) => {
  return (
    <button onClick={props.onMoveToElement} className="down-button">
      <Image src={DownArrow} alt="down-arrow" className="w-8 h-8 opacity-50" />
    </button>
  );
};

export default DownButton;
