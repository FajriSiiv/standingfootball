import { Content } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        height: "90vh",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Baca Jadwal dan Peringkat Bola.
      </h2>
    </Content>
  );
};

export default Homepage;
