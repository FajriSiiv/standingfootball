import { Layout } from "antd";
import React from "react";
import FooterFill from "./Footer";
import Footer from "./Footer";
import HeaderFill from "./Header";

const LayoutFill = ({ children }) => {
  return (
    <Layout>
      <HeaderFill />
      {children}
      <FooterFill />
    </Layout>
  );
};

export default LayoutFill;
