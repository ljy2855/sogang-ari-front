import styles from "./PageSideBar.module.scss";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageSideBar() {
  return (
    <Container className={styles.sidebar}>
      <div className={styles.items}>
        <div className={styles.menu}>Menu</div>
        <div className={styles.home}>Home</div>
        <div>My Page</div>
        <div>Q & A</div>
      </div>
    </Container>
  );
}

export default PageSideBar;
