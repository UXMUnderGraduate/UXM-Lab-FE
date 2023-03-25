import React from 'react';
import PropTypes from 'prop-types';

export default function TitleHorizon({ children }) {
  return (
    <>
      <h1 className="font-black text-3xl my-10 py-2 border-black border-y">{children}</h1>
    </>
  );
}

TitleHorizon.propTypes = {
  children: PropTypes.node.isRequired,
};
