import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import styles from "./AskPage.module.scss";

function AskPage() {
  const [isAskPageModalShow, setAskPageModalShow] = useState(false);
  const handleAskPageModalOpen = () => setAskPageModalShow(true);
  const handleAskPageModalClose = () => setAskPageModalShow(false);

  return (
    <>
      <Button
        className={styles.button}
        variant="text"
        onClick={handleAskPageModalOpen}
      >
        Q & A
      </Button>
      <Modal
        show={isAskPageModalShow}
        onHide={handleAskPageModalClose}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>
            <div className={styles.modal_title}>Ask a Question</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className={styles.modal_body}>
            <Form>
              <input className={styles.email_field} placeholder="Email"></input>
              <label className={styles.content_label}>
                What is your question?
              </label>
              <textarea className={styles.content}></textarea>
              <Form.Check
                className={styles.checkbox}
                type="checkbox"
                label="Receive email notification"
              ></Form.Check>
              <Form.Check
                className={styles.terms}
                type="checkbox"
                label="I agree with the "
              ></Form.Check>
              <a className={styles.terms_link}>{"Terms & Conditions"}</a>
              <Button className={styles.submit}>Submit the question</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AskPage;
