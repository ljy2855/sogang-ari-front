import { Input } from "antd";
import React, { useState } from "react";
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
import SignUpService from "../services/SignUpService";

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
  const passwordRef = React.useRef<Input>(null);
  const passwordCheckRef = React.useRef<Input>(null);
  const studentIdRef = React.useRef<Input>(null);
  const [result, setResult] = useState("");
  const [signUpState, setSignUpState] = useState<SignUpState>({
    isPasswordCheck: false,
    fail: undefined,
  });

  const checkPassword = (password: string, passwordCheck: string): void => {
    if (password === null) {
      setSignUpState({
        isPasswordCheck: false,
        errorMessage: "비밀번호가 비었습니다",
        fail: true,
      });
      return;
    }
    if (password.length <= 1) {
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
  };

  const submit = (): void => {
    checkPassword(
      passwordRef.current!.state.value,
      passwordCheckRef.current!.state.value
    );

    if (signUpState.isPasswordCheck) {
      const name = nameRef.current!.state.value;
      const password = passwordRef.current!.state.value;
      const studentId = studentIdRef.current!.state.value;
      SignUpService.signUp({ name, password, studentId }).then((result) => {
        setResult(result);
        console.log("result", result);

        if (result === "success") closeForm();
      });
    }
  };

  const closeForm = (): void => {
    setSignUpState({
      isPasswordCheck: false,
      fail: false,
    });
    setResult("");
    handleSignUpFormClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleSignUpFormClose}>
        <ModalHeader closeButton>
          <Modal.Title>회원가입</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <FormLabel>닉네임</FormLabel>
              <Input type="text" placeholder="name" ref={nameRef}></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="example@test.com"
                ref={studentIdRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                ref={passwordRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              <FormLabel>Password check</FormLabel>
              <Input
                type="password"
                placeholder="password"
                ref={passwordCheckRef}
              ></Input>
            </FormGroup>
            <FormGroup>
              {signUpState.fail ? (
                <Alert variant="danger">{signUpState.errorMessage}</Alert>
              ) : null}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={submit}> 제출</Button>
          <Button onClick={closeForm} variant="secondary">
            닫기
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SignUpForm;
