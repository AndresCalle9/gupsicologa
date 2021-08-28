import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhastappFloat from "../WhatsappFloat/WhastappFloat";

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      <WhastappFloat/>
      <Footer/>
    </div>
  );
};

export default Layout;
