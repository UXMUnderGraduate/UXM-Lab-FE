import React, { FC, ReactNode } from 'react';

interface TitleHorizonProps {
  children: ReactNode;
}

const TitleHorizon: FC<TitleHorizonProps> = ({ children }) => {
  return (
    <>
      <h1 className="font-black text-3xl my-10 py-2 border-black border-y">{children}</h1>
    </>
  );
};

export default TitleHorizon;
