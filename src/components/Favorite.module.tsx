import { Col } from "antd";
import React from "react";
import { StarTwoTone } from "@ant-design/icons";

function click() {}
function favorite() {
  return (
    <Col span={12}>
      <button onClick={click}>
        <StarTwoTone style={{ color: "yellow" }} />
      </button>
    </Col>
  );
}

export default favorite;
