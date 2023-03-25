import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      <section className="main-container">{children}</section>
    </main>
  );
};

export default Main;
