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
import SignUpForm from "./SignUp";
import { stripVTControlCharacters } from "util";

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
    <div className={styles.container}>
      {token !== null ? (
        <button className={styles.btn_pink} onClick={logout}>
          로그아웃
        </button>
      ) : (
        <button className={styles.btn_pink} onClick={handleLoginFormShow}>
          로그인/회원가입
        </button>
      )}
      <Modal show={loginModalShow} onHide={handleLoginFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className={styles.modal_title}>로그인</div>
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <FormGroup>
              {/* <FormLabel>studentID </FormLabel> */}
              <Input
                className={styles.form_label}
                type="text"
                placeholder="ID"
                ref={studentIdRef}
                onKeyPress={keyPress}
              />
            </FormGroup>
            <FormGroup>
              {/* <FormLabel>password</FormLabel> */}
              <Input
                className={styles.form_label}
                type="password"
                placeholder="Password"
                ref={passwordRef}
                onKeyPress={keyPress}
              />
            </FormGroup>
            <br />
            {/* 로그인 위치 설정 ㅠㅜ */}
            <FormGroup>
              <button className={styles.btn_red} onClick={click}>
                로그인
              </button>
            </FormGroup>
          </Form>
        </ModalBody>

        {/* a tag 로 바꾸기 */}
        <ModalFooter>
          <a href="javascript:void(0)" className={styles.red_a}>
            아이디/비밀번호 찾기
          </a>
          <a
            href="javascript:void(0)"
            className={styles.red_a}
            onClick={() => {
              handleLoginFormClose();
              handleSignUpFormShow();
            }}
          >
            회원가입
          </a>
        </ModalFooter>
      </Modal>
      <SignUpForm
        show={signUpModalShow}
        handleSignUpFormClose={handleSignUpFormClose}
      />
    </div>
  );
};

export default LoginButton;
