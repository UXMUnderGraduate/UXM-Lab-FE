import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className="mt-24 sm:mt-30">
      <h1 className="heading">{children}</h1>
    </div>
  );
};

export default Heading;
