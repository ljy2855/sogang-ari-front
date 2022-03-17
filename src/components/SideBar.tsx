import styles from "./MainSideBar.module.scss";
import { Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainSideBar() {
  return (
    <Nav className={styles.sidebar + " nav-pills nav-fill flex-column "}>
      <Row>
        <Nav.Item className={styles.item}>
          <Link to="/"> Home</Link>
        </Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}>
          <Link to="/ask"> 의견</Link>
        </Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}>
          <Link to="/JubroLab"> jubro test</Link>
        </Nav.Item>
      </Row>
      <Row>
        <Nav.Item className={styles.item}> test</Nav.Item>
      </Row>
    </Nav>
  );
}

export default MainSideBar;
