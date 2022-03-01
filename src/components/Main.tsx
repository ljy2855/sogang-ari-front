import { useEffect, useState } from "react";
import Club from "./Club";
import styles from "./Main.module.css";
import React from "react";
import { ClubType } from "../types";
import { Col, Row } from "antd";
import LoginButton from "./LoginButton.module";
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
  const [clubs, setClubs] = useState([]);
  const [rating, setRating] = useState("?");
  const [tmp, setTmp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmp(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setRating(tmp);
      setisInput(true);
    }
  };
  const onClick = () => {
    setRating(tmp);
    setisInput(true);
    //   $(function () {
    //     $("a[href*=#]").on("click", function (e) {
    //       e.preventDefault();
    //       $("html, body").animate(
    //         { scrollTop: $($(this).attr("href")).offset().top },
    //         500,
    //         "linear"
    //       );
    //     });
    //   });
  };
  const getClubs = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    // console.log(json);
    setClubs(json.data.movies);
  };

  /* running one time */
  useEffect(() => {
    getClubs();
  }, [rating]);

  // console.log(clubs);
  return (
    <div className={styles.background}>
      <LoginButton />
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
                  <button className={styles.btn_category} onClick={onClick}>
                    봉사
                  </button>
                </a>
                <a href="#section02">
                  <button className={styles.btn_category} onClick={onClick}>
                    사회교양
                  </button>
                </a>
                <a href="#section02">
                  <button className={styles.btn_category} onClick={onClick}>
                    종교
                  </button>
                </a>
                <a href="#section02">
                  <button className={styles.btn_category} onClick={onClick}>
                    연행예술
                  </button>
                </a>
                <a href="#section02">
                  <button className={styles.btn_category} onClick={onClick}>
                    체육
                  </button>
                </a>
                <a href="#section02">
                  <button className={styles.btn_category} onClick={onClick}>
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
                  <button className={styles.btn_go} onClick={onClick}>
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
                  {clubs.map((club: ClubType) => (
                    <Club
                      key={club.id}
                      id={club.id}
                      title={club.title}
                      year={club.year}
                      rating={club.rating}
                      medium_cover_image={club.medium_cover_image}
                      summary={club.summary}
                      genres={club.genres}
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
