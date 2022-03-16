import styles from "./LoginButton.module.scss";
import React, { useEffect, useState } from "react";
import useAccessToken from "../hooks/useAccessToken";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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
  const [loginModalShow, loginSetShow] = useState(false);
  const [signUpModalShow, signUpSetShow] = useState(false);

  const handleLoginFormClose = () => loginSetShow(false);
  const handleLoginFormShow = () => loginSetShow(true);

  const handleSignUpFormClose = () => signUpSetShow(false);
  const handleSignUpFormShow = () => signUpSetShow(true);

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

  useEffect(() => {
    if (!loading && error === null) {
      handleLoginFormClose();
    }
  }, [loading, error]);

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
    <>
      {token !== null ? (
        <div className="btn">
          <button className={styles.btn} onClick={logout}>
            로그아웃
          </button>
        </div>
      ) : (
        <div className="btn">
          <button className={styles.btn} onClick={handleLoginFormShow}>
            로그인/회원가입
          </button>
        </div>
      )}
      <Modal show={loginModalShow} onHide={handleLoginFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
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
          <Button
            onClick={() => {
              handleLoginFormClose();
              handleSignUpFormShow();
            }}
            variant="secondary"
          >
            회원가입
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={signUpModalShow} onHide={handleSignUpFormClose}>
        <ModalHeader closeButton>
          <Modal.Title>회원가입</Modal.Title>
        </ModalHeader>
        <ModalBody> test2</ModalBody>
        <ModalFooter>
          <Button onClick={handleSignUpFormClose}>닫기</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LoginButton;
