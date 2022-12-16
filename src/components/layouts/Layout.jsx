import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = (props) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
