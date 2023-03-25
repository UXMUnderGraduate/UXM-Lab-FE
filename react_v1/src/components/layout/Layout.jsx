import React from 'react';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
