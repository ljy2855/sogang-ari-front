import styles from "./PageSideBar.module.scss";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageSideBar() {
  return (
    <Container>
      <Col>
        <Row>
          <div className={styles.item}>
            Menu
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            Home
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            My Page
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            Q & A
          </div>
        </Row>
      </Col>
    </Container>
  );
}

export default PageSideBar;
