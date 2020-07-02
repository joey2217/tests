import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Card } from "antd";

const ToggleBtn = styled.div`
  position: absolute;
  right: 10px;
  top: -30px;
  width: 30px;
  height: 30px;
  background-color: #69c0ff;
  border-radius: 4px 4px 0 0;
  text-align: center;
  line-height: 35px;
`;

const Panel = (props: PropsWithChildren<any>) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <Card
      bodyStyle={{ padding: 0 }}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        transition: "all 0.5s ease-out",
        transform: `translateY(${visible ? 0 : 100}%)`,
      }}
    >
      <ToggleBtn onClick={toggle}>
        {React.createElement(visible ? DownOutlined : UpOutlined, {
          onClick: toggle,
          style: { fontSize: "18px", color: "#fff" },
        })}
      </ToggleBtn>
      {props.children}
    </Card>
  );
};
export default Panel;
