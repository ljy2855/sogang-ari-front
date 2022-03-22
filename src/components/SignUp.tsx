import styles from "./LoginButton.module.scss";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

interface SignUpFormProps {
  show: boolean;
  handleSignUpFormClose: () => void;
}

interface SignUpState {
  isPasswordCheck: boolean | false;
  fail?: boolean;
  errorMessage?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  show,
  handleSignUpFormClose,
}) => {
  const nameRef = React.useRef<Input>(null);
  const majorRef = React.useRef(null);
  const studentIdRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);
  const passwordCheckRef = React.useRef<Input>(null);
  const emailAddressRef = React.useRef<Input>(null);
  const [signUpState, setSignUpState] = useState<SignUpState>({
    isPasswordCheck: false,
    fail: undefined,
  });

  const checkPassword = (
    password: string | null,
    passwordCheck: string | null
  ): void => {
    if (password == null) {
      setSignUpState({
        isPasswordCheck: false,
        errorMessage: "비밀번호가 비었습니다",
        fail: true,
      });
      return;
    }
    if (password.length <= 10) {
      setSignUpState({
        isPasswordCheck: false,
        errorMessage: "비밀번호가 너무 짧습니다",
        fail: true,
      });
      return;
    }
    if (password !== passwordCheck) {
      setSignUpState({
        isPasswordCheck: false,
        errorMessage: "비밀번호가 일치하지 않습니다",
        fail: true,
      });
      return;
    }
    setSignUpState({
      isPasswordCheck: true,
    });
    closeForm();
  };

  const submit = (): void => {
    checkPassword(
      passwordRef.current!.state.value,
      passwordCheckRef.current!.state.value
    );
  };

  const closeForm = (): void => {
    handleSignUpFormClose();
    setSignUpState({
      isPasswordCheck: false,
      fail: false,
    });
  };

  //   useEffect(() => {
  //     checkPassword(
  //       passwordRef.current!.state.value,
  //       passwordCheckRef.current!.state.value
  //     );
  //   }, []);

  return (
    <>
      <Modal show={show} onHide={closeForm}>
        <ModalHeader closeButton>
          <Modal.Title>회원가입</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <FormLabel>이름</FormLabel>
              <Input type="text" placeholder="이름" ref={nameRef}></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>학번</FormLabel>
              <Input type="text" placeholder="학번" ref={studentIdRef}></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>전공</FormLabel>
              <Form.Select aria-label="(전공선택)" ref={majorRef}>
                <option>컴공</option>
                <option>전공2</option>
                <option>전공3</option>
              </Form.Select>
            </FormGroup>

            <FormGroup>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type="password"
                placeholder="비밀번호"
                ref={passwordRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>비밀번호 확인</FormLabel>
              <Input
                type="password"
                placeholder="비밀번호 확인"
                ref={passwordCheckRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>이메일 (sogang) </FormLabel>
              <Input
                type="email"
                placeholder="example@sogang.ac.kr"
                ref={emailAddressRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              {signUpState.fail ? (
                <Alert variant="danger mt-2">{signUpState.errorMessage}</Alert>
              ) : null}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button className={styles.btn_red} onClick={submit}>
            {" "}
            가입하기
          </button>
          {/* <Button onClick={closeForm} variant="secondary">
            닫기
          </Button> */}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SignUpForm;
