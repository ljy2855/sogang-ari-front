import styles from "./LoginButton.module.scss";
import React, { useEffect, useState } from "react";
import useAccessToken from "../hooks/useAccessToken";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { LoginReqType } from "../types";
import { message, Input } from "antd";
import SignUpForm from "./SignUp";

interface AuthInterface {
  logout: () => void;
  login: ({ userId, password }: LoginReqType) => void;
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

  const userIdRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);
  const token = useAccessToken();

  useEffect(() => {
    if (!loading && error === null) {
      handleLoginFormClose();
    }
  }, [loading, error]);

  const click = (event: React.MouseEvent<HTMLButtonElement> | null) => {
    event?.preventDefault();
    const userId = userIdRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    login({ userId, password });
  };

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      click(null);
    }
  };

  return (
    <>
      {token !== null ? (
        <Button className={styles.login_button} variant="text" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button
          className={styles.login_button}
          variant="text"
          onClick={handleLoginFormShow}
        >
          Login / Sign Up
        </Button>
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
              {/* <FormLabel>userId </FormLabel> */}
              <Input
                className={styles.form_label}
                type="text"
                placeholder="ID"
                ref={userIdRef}
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
            {error ? (
              <FormGroup>
                <Alert variant="danger my-1"> {error.message}</Alert>
              </FormGroup>
            ) : null}

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
          <div className={styles.red_str}>아이디/비밀번호 찾기</div>
          <div
            className={styles.red_str}
            onClick={() => {
              handleLoginFormClose();
              handleSignUpFormShow();
            }}
          >
            회원가입
          </div>
        </ModalFooter>
      </Modal>
      <SignUpForm
        show={signUpModalShow}
        handleSignUpFormClose={handleSignUpFormClose}
      />
    </>
  );
};

export default LoginButton;
