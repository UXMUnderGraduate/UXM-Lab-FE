import React from 'react';

type props = {
  children: React.ReactNode;
};

export default function GridContainer({ children }: props) {
  return <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-1 gap-4">{children}</div>;
}
