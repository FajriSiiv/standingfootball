import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React from "react";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <Link rel="noopener noreferrer" href="../Peringkat/EPL">
            English Premier League
          </Link>
        ),
        style: {
          fontSize: "1rem",
        },
      },
      {
        key: "2",
        label: (
          <Link rel="noopener noreferrer" href="../Peringkat/Laliga">
            LaLiga
          </Link>
        ),
        style: {
          fontSize: "1rem",
        },
      },
      {
        key: "3",
        label: (
          <Link rel="noopener noreferrer" href="../Peringkat/Italia">
            Seria A
          </Link>
        ),
        style: {
          fontSize: "1rem",
        },
      },
    ]}
  />
);

const DropdownJS = () => {
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span
            style={{
              color: "white",
              fontSize: "1rem",
            }}
          >
            Standing
          </span>
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownJS;
