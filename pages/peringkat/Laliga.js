import { Col, Divider, Empty, Layout, Row, Skeleton, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import PeringkatDiv from "../components/Respond/PeringkatDiv";
import UseFetch from "../hooks/UseFetch";

const LaLiga = () => {
  const { data, loading, error } = UseFetch(
    "https://api-football-standings.azharimm.site/leagues/esp.1/standings?season=2022&sort=asc"
  );

  return (
    <Content
      style={{
        marginTop: "60px",
        padding: "20px 50px",
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
        }}
      >
        LaLiga
      </h2>
      <Layout style={{ background: "white" }}>
        <Row
          style={{
            textAlign: "center",
            height: "50px",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Col span={2}>No</Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col span={10}>Nama</Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col
            span={2}
            style={{
              background: "#d8f3dc78",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Menang
          </Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col
            span={2}
            style={{
              background: "#ffccd578",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Kalah
          </Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col
            span={2}
            style={{
              background: "#e9ff7078",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Seri
          </Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col span={2}>Main</Col>
          <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
          <Col span={3}>Poin</Col>
          <Divider style={{ margin: 0 }} />
        </Row>
        {data && <PeringkatDiv load={data} />}
        {error && <Empty />}
        {loading && (
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              background: "#00000078",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        )}
      </Layout>
    </Content>
  );
};

export default LaLiga;
