import styles from "./LoginButton.module.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout as logoutSaga } from "../redux/modules/auth";
import useAccessToken from "../hooks/useAccessToken";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { LoginReqType } from "../types";
import { message, Input } from "antd";

interface AuthInterface {
  logout: () => void;
  login: ({ studentId, password }: LoginReqType) => void;
  loading: boolean;
  error: Error | null;
}

const LoginButton: React.FC<AuthInterface> = ({
  logout,
  login,
  loading,
  error,
}) => {
  const [show, setShow] = useState(false);

  const handleLoginFormClose = () => setShow(false);
  const handleLoginFormShow = () => setShow(true);

  const studentIdRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);
  const token = useAccessToken();

  useEffect(() => {
    if (error === null) return;
    console.log("error:", error.message);
    switch (error.message) {
      case "USER_NOT_EXIST":
        console.log("가입되지 않은 회원입니다.");
        message.error("가입되지 않은 회원입니다.");
        break;
      case "AUTH_ERROR":
        console.log("비밀번호가 일치하지 않습니다.");
        message.error("비밀번호가 일치하지 않습니다.");
        break;
      default:
        console.log("Unknown error occured");
        message.error("Unknown error occured");
    }
  }, [error]);

  function click() {
    const studentId = studentIdRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    login({ studentId, password });
    if (!loading && error === null) handleLoginFormClose();
  }

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      click();
    }
  };

  return (
    <>
      {token !== null ? (
        <div className="btn">
          <button className={styles.btn} onClick={logout}>
            로그아웃
          </button>
        </div>
      ) : (
        <button className={styles.btn} onClick={handleLoginFormShow}>
          로그인/회원가입
        </button>
      )}
      <Modal show={show} onHide={handleLoginFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인/회원가입</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <FormGroup>
              <FormLabel>studentID </FormLabel>
              <Input
                type="text"
                placeholder="studentId"
                ref={studentIdRef}
                onKeyPress={keyPress}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>password </FormLabel>
              <Input
                type="password"
                placeholder="password"
                ref={passwordRef}
                onKeyPress={keyPress}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={click} variant="primary">
            로그인
          </Button>
          <Button onClick={handleLoginFormClose} variant="secondary">
            닫기
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LoginButton;
