import React from 'react';

const Publication = (props) => {
  return (
    <li className='publications-list_item'>
      <p className='font-medium text-base'>{'– ' + props.title}</p>
    </li>
  );
};

export default Publication;
