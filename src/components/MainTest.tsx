// 테스트용

import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import React from "react";
import { ClubResType } from "../types";
import { Col, Row } from "antd";
import ClubService from "../services/ClubService";
import ClubLogoService from "../services/ClubLogoService";
import axios from "axios";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scroller,
// } from "react-scroll";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

function Main() {
  const [isInput, setisInput] = useState(false);
  const [clubs, setClubs] = useState<ClubResType[]>([]);
  const [section, setSection] = useState("");
  const [mode, setMode] = useState(0);
  const [tmp, setTmp] = useState("");
  const [img, setImg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmp(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSection(tmp);
      setMode(1);
      setisInput(true);
    }
  };

  const onClick = (section: string, mode: number) => () => {
    setSection(section);
    setMode(mode);
    setisInput(true);
  };

  // mode 0 은 섹션으로 검색, mode 1 은 이름으로 검색
  const getClubs = (section: string, mode: number) => {
    if (section !== "") {
      console.log(section, mode);
      if (mode === 0) {
        ClubService.getClubsBySection(section).then((response) =>
          setClubs(response)
        );
      } else {
        ClubService.getClubsByName(section).then((response) =>
          setClubs(response)
        );
      }
    }
  };

  /* running one time */
  useEffect(() => {
    getClubs(section, mode);
  }, [section, mode]);

  // console.log(clubs);
  return (
    <div className={styles.background}>
      <Row align="middle" className={styles.main_row}>
        {/* 홈페이지 제목 */}
        <Col span={24}>
          <div className={styles.main_title}>
            <strong>서강아리</strong> {<span className={styles.word}> !</span>}
          </div>
          <br />
        </Col>
        {/* 간략한 소개 */}
        <Col span={24}>
          <br />
          <div className={styles.main_subtitle}>
            환영합니다, <strong>서강</strong>대학교 동<strong>아리</strong>
            플랫폼입니다
            {" | "}
            <a href="https://www.instagram.com/jooeon.kang/?hl=ko">
              @Team_Luwak
            </a>
            <br />
            <br />
            동아리 정보를 손쉽게 받아가세요 :)
            <br />
          </div>
        </Col>
        {/* 필터 & 검색 */}

        <Col span={24}>
          <div>
            <div>
              <br /> <br /> <br />
              <div className={styles.container}>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("봉사분과", 0)}
                  >
                    봉사
                  </button>
                </a>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("사회교양분과", 0)}
                  >
                    사회교양
                  </button>
                </a>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("종교분과", 0)}
                  >
                    종교
                  </button>
                </a>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("연행예술분과", 0)}
                  >
                    연행예술
                  </button>
                </a>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("체육분과", 0)}
                  >
                    체육
                  </button>
                </a>
                <a href="#section02">
                  <button
                    className={styles.btn_category}
                    onClick={onClick("학술분과", 0)}
                  >
                    학술
                  </button>
                </a>
              </div>
              <div className={styles.container}>
                <br /> <br /> <br />
              </div>
              <div className={styles.container}>
                <input
                  type="input"
                  value={tmp}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="이름으로 검색"
                />

                <a href="#section02">
                  <button className={styles.btn_go} onClick={onClick(tmp, 1)}>
                    GO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Col>

        {/* 검색 결과 */}
        <section id="section02">
          <Col span={24}>
            <div className={styles.container}>
              {isInput ? (
                <div className={styles.clubs}>
                  {clubs.map((club: ClubResType) => (
                    <img
                      src={`${process.env.REACT_APP_URL}/api/club/logo/${club.id}`}
                      style={{ width: "100px", height: "100px" }}
                      alt={`${club.name}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </Col>
        </section>
      </Row>
    </div>
  );
}

// 서강대학교 총동아리 연합 학생회{" "}
// <a href="https://sgdongyeon.oopy.io/">[바로가기]</a>

/* <a href="https://www.sogang.ac.kr/campus/b_club03.html">
  <div className={styles.bg}></div>
</a>; */

export default Main;
