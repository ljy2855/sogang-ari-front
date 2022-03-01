import { Col, Row } from "antd";

function Login() {
  return (
    <div>
      <br />
      <Row>
        <Col span={24}>
          <Row>
            <Col span={20}> </Col>
            <Col span={4}>
              {" "}
              <a href={`${document.location.href}signin`}>로그인/회원가입</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
