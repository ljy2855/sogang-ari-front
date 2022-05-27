import styles from "./LoginButton.module.scss";
import { Input } from "antd";
import React, { useState } from "react";
import {
  Alert,
  Form,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Container,
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
  const userIdRef = React.useRef<Input>(null);
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
      <Modal show={show} onHide={closeForm} size="lg">
        <ModalHeader closeButton>
          <Modal.Title>
            <div className={styles.modal_title}>Sign Up</div>
          </Modal.Title>
        </ModalHeader>
        <ModalBody>
          <Container className={styles.modal_body}>
            <Form>
              <FormGroup>
                <input
                  className={styles.form_label}
                  placeholder="Email"
                ></input>
              </FormGroup>
              <FormGroup>
                <input
                  className={styles.form_label}
                  placeholder="Certification"
                ></input>
              </FormGroup>
              <FormGroup>
                <input
                  className={styles.form_label}
                  placeholder="Password"
                  type="password"
                ></input>
              </FormGroup>
              <FormGroup>
                <input
                  className={styles.form_label}
                  placeholder="Confirm password"
                  type="password"
                ></input>
              </FormGroup>
              <FormGroup>
                <Form.Check
                  className={styles.terms}
                  type="checkbox"
                  label="I agree with the "
                ></Form.Check>
                <a className={styles.terms_link}>{"Terms & Conditions"}</a>
              </FormGroup>
              <FormGroup>
                <button className={styles.btn_red} onClick={submit}>
                  Sign up
                </button>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SignUpForm;
