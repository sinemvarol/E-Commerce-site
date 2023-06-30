import React from "react";
import Footer from "pages/component/layout/Footer";
import Header from "pages/component/layout/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;