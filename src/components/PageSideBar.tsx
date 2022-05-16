import styles from "./PageSideBar.module.scss";
import { Container } from "react-bootstrap";
// import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import MyPage from "./MyPage";

interface PageSideBarProps {
  getWishs: () => void;
  deleteWish: (clubId: string) => void;
}

const PageSideBar: React.FC<PageSideBarProps> = ({ getWishs, deleteWish }) => {
  return (
    <Container className={styles.sidebar}>
      <div className={styles.items}>
        <div className={styles.menu}>Menu</div>
        <br />
        <div className={styles.home}>Home</div>
        <MyPage></MyPage>
        <div>Q & A</div>
      </div>
    </Container>
  );
};

export default PageSideBar;
