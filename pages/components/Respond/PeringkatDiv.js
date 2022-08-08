import { Col, Divider, Image, Row } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const PeringkatDiv = ({ load }) => {
  const data = load.data.standings;
  console.log(data);
  return (
    <AnimatePresence>
      <>
        {data.map((team) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: `0.5 +${team.stats[8].value}`,
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
              key={team.team.id}
            >
              <Col span={2}>{team.stats[8].value}</Col>
              <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
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
                  width={40}
                  height={40}
                  src={`${team.team.logos[0].href}`}
                />
                <p style={{ margin: "0 0 0 40px" }}>{team.team.name}</p>
              </Col>
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
                {team.stats[0].value}
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
                {team.stats[1].value}
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
                {team.stats[2].value}
              </Col>
              <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
              <Col span={2}>{team.stats[3].value}</Col>
              <Divider type="vertical" style={{ margin: 0, height: "50px" }} />
              <Col span={3}>{team.stats[6].value}</Col>
              <Divider style={{ margin: 0 }} />
            </Row>
          </motion.div>
        ))}
      </>
    </AnimatePresence>
  );
};

export default PeringkatDiv;
