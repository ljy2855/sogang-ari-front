import React, { useEffect, useState } from "react";
import { ClubResType, LoginReqType, WishResType } from "../types";
import useAccessToken from "../hooks/useAccessToken";
import styles from "./Main.module.scss";
import { Container, Row, Col } from "react-bootstrap";

import LoginButton from "./LoginButton.module";
import MainSideBar from "./SideBar";
import FilterClub from "./FilterClub";
import { Route, Switch } from "react-router-dom";
import UserAsk from "./UserAsk";
import NotFound from "../pages/NotFound";
import ClubList from "./ClubList";
import ClubService from "../services/ClubService";

interface MainProps {
  wishs: WishResType[] | null;
  wish_error: Error | null;
  wish_loading: boolean;
  auth_error: Error | null;
  auth_loading: boolean;
  getWishs: () => void;
  deleteWish: (clubId: string) => void;
  addWish: (clubId: string) => void;
  logout: () => void;
  login: ({ studentId, password }: LoginReqType) => void;
}

const Main: React.FC<MainProps> = ({
  wishs,
  wish_error,
  wish_loading,
  auth_error,
  auth_loading,
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
    if (wish_error) {
      logout();
    }
  }, [wish_error, logout]);

  const [clubs, setClubs] = useState<ClubResType[]>([]);

  useEffect(() => {
    console.log(clubs);
  }, [clubs]);

  function Home() {
    return (
      <>
        <div className="flex-column  ">
          <p className="text-center">서강 아리</p>
          <div className="container">
            <div className={styles.main_subtitle}>
              환영합니다, <strong>서강</strong>대학교 동<strong>아리</strong>
              플랫폼입니다
              {" | "}
              <a href="https://www.instagram.com/jooeon.kang/?hl=ko">
                @Team_Luwak
              </a>
              <br />
              <br />
              동아리 정보를 손쉽게 받아가세요
              <br />
            </div>
          </div>
          <FilterClub setClubs={setClubs} />
          {/* <div className="text-center">
            <img
              src="/images/sogang_bg_remove_small.png"
              className={styles.logoImage}
            ></img>
          </div> */}
          <ClubList clubs={clubs} />
        </div>
      </>
    );
  }

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
                    error={auth_error}
                    loading={auth_loading}
                  />
                </nav>
                <div className={styles.Main}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ask" component={UserAsk} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default Main;
