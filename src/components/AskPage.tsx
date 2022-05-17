import { useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
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
            <input className={styles.email_field} placeholder="Email"></input>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AskPage;
