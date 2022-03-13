import styles from "./MainSideBar.module.scss";
import { Nav, Row } from "react-bootstrap";

function MainSideBar() {
  return (
    <Nav className={styles.sidebar + " nav-pills nav-fill flex-column "}>
      <Row>
        <Nav.Item className={styles.item}> Home</Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}> testPage</Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}> test</Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}> test</Nav.Item>
      </Row>
    </Nav>
  );
}

export default MainSideBar;
