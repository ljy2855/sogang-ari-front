import { useRef } from "react";
import { Button, Container, Form, FormGroup, FormLabel } from "react-bootstrap";

function UserAsk() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function submit() {
    console.log([
      titleRef.current!.value,
      contentRef.current!.value,
      fileRef.current!.files,
    ]);
  }

  return (
    <>
      <Container>
        <Form>
          <FormGroup>
            <FormLabel>회신 받을 이메일</FormLabel>
            <Form.Control type="email" ref={emailRef}></Form.Control>
          </FormGroup>
          <FormGroup>
            <FormLabel>제목</FormLabel>
            <Form.Control type="text" ref={titleRef}></Form.Control>
          </FormGroup>
          <FormGroup>
            <FormLabel>내용</FormLabel>
            <Form.Control type="text" ref={contentRef}></Form.Control>
          </FormGroup>
          <FormGroup>
            <FormLabel>첨부</FormLabel>
            <Form.Control type="file" ref={fileRef}></Form.Control>
          </FormGroup>
          <Button onClick={submit}>제출</Button>
        </Form>
      </Container>
    </>
  );
}

export default UserAsk;
