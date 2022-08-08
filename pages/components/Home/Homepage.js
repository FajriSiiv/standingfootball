import { Button } from "antd";
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
        flexDirection: "column",
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
      <Link href="../../peringkat/EPL">
        <Button
          style={{
            fontSize: "1.5rem",
            padding: "5px 40px",
            height: "max-content",
          }}
        >
          <span>Premier League</span>
        </Button>
      </Link>
    </Content>
  );
};

export default Homepage;
