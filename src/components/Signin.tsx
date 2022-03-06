import { Button, Col, Input, message, Row } from "antd";
import React, { useEffect } from "react";
import { LoginReqType } from "../types";
import styles from "./Signin.module.css";

interface SigninProps {
  loading: boolean;
  error: Error | null;
  login: ({ studentId, password }: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ loading, login, error }) => {
  const studentIdRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);

  useEffect(() => {
    if (error === null) return;
    console.log("error:", error);
    switch (error.message) {
      case "USER_NOT_EXIST":
        message.error("가입되지 않은 회원입니다.");
        break;
      case "인증 에러":
        message.error("비밀번호가 일치하지 않습니다.");
        break;
      default:
        message.error("Unknown error occured");
    }
  }, [error]);

  function click() {
    const studentId = studentIdRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    login({ studentId, password });
  }

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      click();
    }
  };

  return (
    <form>
      <Row align="middle" className={styles.signin_row}>
        <Col span={24}>
          <Row className={styles.signin_contents}>
            <Col span={12}>
              <img
                src="/images/bg_signin.png"
                alt="Signin"
                className={styles.signin_bg}
              />
            </Col>
            <Col span={12}>
              <div className={styles.signin_title}>Sogang Ari</div>
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
                  placeholder="studentId"
                  autoComplete="studentId"
                  name="studentId"
                  className={styles.input}
                  ref={studentIdRef}
                  onKeyPress={keyPress}
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
                  onKeyPress={keyPress}
                />
              </div>
              <div className={styles.button_area}>
                <Button
                  size="large"
                  loading={loading}
                  className={styles.button}
                  onClick={click}
                >
                  Sign In
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default Signin;
