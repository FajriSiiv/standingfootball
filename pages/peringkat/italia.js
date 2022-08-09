import { Col, Divider, Empty, Image, Layout, Row, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import UseFetch from "../../Hooks/UseFetch";
import { AnimatePresence, motion } from "framer-motion";

const Italia = ({ datas }) => {
  const { data, loading, error } = UseFetch(datas);

  return (
    <Content
      style={{
        marginTop: "60px",
        padding: "20px 50px",
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
        }}
      >
        Seria A
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
        {data && (
          <AnimatePresence>
            <>
              {data.data.standings.map((team) => (
                <motion.div
                  key={team.team.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <Row
                    style={{
                      textAlign: "center",
                      height: "50px",
                      alignItems: "center",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      justifyContent: "center",
                    }}
                  >
                    <Col span={2}>{team.stats[8].value}</Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
                    <Col
                      span={10}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 20,
                      }}
                    >
                      <Image
                        alt="img"
                        width={40}
                        height={40}
                        src={`${team.team.logos[0].href}`}
                      />
                      <p style={{ margin: "0 0 0 40px" }}>{team.team.name}</p>
                    </Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
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
                      {team.stats[0].value}
                    </Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
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
                      {team.stats[1].value}
                    </Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
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
                      {team.stats[2].value}
                    </Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
                    <Col span={2}>{team.stats[3].value}</Col>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, height: "50px" }}
                    />
                    <Col span={3}>{team.stats[6].value}</Col>
                    <Divider style={{ margin: 0 }} />
                  </Row>
                </motion.div>
              ))}
            </>
          </AnimatePresence>
        )}
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api-football-standings.azharimm.site/leagues/ita.1/standings?season=2022&sort=asc"
  );
  const datas = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      datas,
    },
    revalidate: 10,
  };
}

export default Italia;
