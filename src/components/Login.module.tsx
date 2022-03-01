import { Col, Row } from "antd";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

const onClick = () => {
  console.log("clicked!");
  return <Redirect to="/" />;
};

function Login() {
  return (
    <div>
      <br />
      <Row>
        <Col span={24}>
          <Row>
            <Col span={20}> </Col>
            <Col span={4}>
              <button className={styles.btn} onClick={onClick}>
                로그인/회원가입
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
