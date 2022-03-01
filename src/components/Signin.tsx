import { Button, Col, Input, Row } from "antd";
import React from "react";
import { useRef } from "react";
import { LoginReqType } from "../types";
import styles from "./Signin.module.css";

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  const studentIdRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  return (
    <form>
      <Row align="middle" className={styles.signin_row}>
        <Col span={24}>
          <Row className={styles.signin_contents}>
            <Col span={12}>
              <img
                src="/bg_signin.png"
                alt="Signin"
                className={styles.signin_bg}
              />
            </Col>
            <Col span={12}>
              <div className={styles.signin_title}>My Books</div>
              <div className={styles.signin_subtitle}>
                Please Note Your Opinion
              </div>
              <div className={styles.signin_underline} />
              <div className={styles.studentId_title}>
                studentId
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  placeholder="ex) 20171630"
                  autoComplete="username"
                  name="studentId"
                  className={styles.input}
                  ref={studentIdRef}
                />
              </div>
              <div className={styles.password_title}>
                Password
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  type="password"
                  autoComplete="current-password"
                  className={styles.input}
                  ref={passwordRef}
                />
              </div>
              <div className={styles.button_area}>
                <Button size="large" className={styles.button} onClick={click}>
                  Sign In
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );

  function click() {
    const studentId = studentIdRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    console.log("MyBooks");
    login({ studentId, password });
  }
};

export default Signin;
