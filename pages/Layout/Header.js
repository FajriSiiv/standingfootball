import { Header } from "antd/lib/layout/layout";
import React from "react";
import DropdownJS from "../components/Dropdown/Dropdown";

const HeaderFill = () => {
  return (
    <Header
      style={{
        position: "fixed",
        width: "100vw",
        height: "60px",
        zIndex: 9,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          color: "#fff",
        }}
      >
        SPORT
      </h1>
      <DropdownJS />
    </Header>
  );
};

export default HeaderFill;
