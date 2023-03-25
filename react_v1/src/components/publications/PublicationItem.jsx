import React from 'react';
import PropsTypes from 'prop-types';

const Publication = (props) => {
  // datetime 문자열 자르기 해야함 
  return (
    <li className="publication_item">
      <p className="font-medium text-sm sm:text-base">
        {'– ' + props.title + '[ ' + props.publishedDate + ' ]'}
      </p>
    </li>
  );
};

export default Publication;

Publication.propTypes = {
  title: PropsTypes.string,
  publishedDate: PropsTypes.string,
};
