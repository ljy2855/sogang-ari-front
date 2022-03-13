// Main 화면 test용

import React, { useEffect } from "react";
import { LoginReqType, WishResType } from "../types";
import useAccessToken from "../hooks/useAccessToken";
import styles from "./MainTest.module.scss";
import { Container, Row, Col } from "react-bootstrap";

import LoginButton from "./LoginButton.module";
import MainSideBar from "./SideBar";
import FilterClub from "./FilterClub";

interface MainTestProps {
  wishs: WishResType[] | null;
  error: Error | null;
  loading: boolean;
  // getClubs: () => void;
  getWishs: () => void;
  deleteWish: (clubId: string) => void;
  addWish: (clubId: string) => void;
  logout: () => void;
  login: ({ studentId, password }: LoginReqType) => void;
}

const MainTest: React.FC<MainTestProps> = ({
  wishs,
  error,
  loading,
  getWishs,
  deleteWish,
  addWish,
  logout,
  login,
}) => {
  const token = useAccessToken();
  useEffect(() => {
    if (token) {
      getWishs();
    }
  }, [token, getWishs]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  return (
    <>
      {
        <Container>
          <Row>
            <Col xs={2}>
              <MainSideBar />
            </Col>
            <Col xs={10}>
              <div className={styles.mainWrapper}>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div></div>
                  <LoginButton
                    logout={logout}
                    login={login}
                    error={error}
                    loading={loading}
                  />
                </nav>
                <div className={styles.Main}>
                  <div className="flex-column  ">
                    <p className="text-center">서강 아리</p>
                    <div className="container">
                      <p className="text-center"> Detail</p>
                    </div>
                    <FilterClub />
                    <div className="text-center">
                      <img
                        src="/images/sogang_bg_remove_small.png"
                        className={styles.logoImage}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default MainTest;
