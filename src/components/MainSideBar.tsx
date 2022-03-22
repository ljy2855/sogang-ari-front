import styles from "./MainSideBar.module.scss";
import { Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainSideBar(prop: { isOpen: boolean }) {
  return (
    <Navbar.Collapse
      dimension="width"
      id="main_sidebar"
      in={prop.isOpen}
      className={styles.sidebar}
    >
      <Nav className="nav-pills nav-fill flex-column">
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
            <Link to="/JubroLab"> jubro Lab</Link>
          </Nav.Item>
        </Row>
        <Row>
          <Nav.Item className={styles.item}> test</Nav.Item>
        </Row>
      </Nav>
    </Navbar.Collapse>
  );
}

export default MainSideBar;
