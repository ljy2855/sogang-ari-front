import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Col, Checkbox } from "antd";
import React from "react";

function onChange(e: CheckboxChangeEvent) {
  console.log(`checked = ${e.target.checked}`);
}

function favorite() {
  return (
    <Col span={12}>
      <Checkbox onChange={onChange}>즐겨찾기</Checkbox>
    </Col>
  );
}

export default favorite;
