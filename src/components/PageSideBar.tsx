import styles from "./PageSideBar.module.scss";
import { Container } from "react-bootstrap";
// import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import MyPage from "./MyPage";
import AskPage from "./AskPage";

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
        <br />
        <AskPage></AskPage>
      </div>
    </Container>
  );
};

export default PageSideBar;
