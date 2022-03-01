import { Col, Row } from "antd";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

const onClick = () => {
  // console.log("clicked!");
  // return <Redirect to="/signin" />;
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
              <a href={`${document.location.href}signin`} className="btn">
                <button className={styles.btn} onClick={onClick}>
                  로그인/회원가입
                </button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
