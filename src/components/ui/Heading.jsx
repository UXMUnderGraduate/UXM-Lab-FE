import React from 'react';

const Heading = (props) => {
  return (
    <div className='mt-24 sm:mt-30'>
      <h1 className='heading'>{props.children}</h1>
    </div>
  );
};

export default Heading;
