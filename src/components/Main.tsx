import { useEffect, useState } from "react";
import Club from "./Club";
import styles from "./Main.module.css";
import React from "react";
import { ClubType } from "../types";

function Main() {
  const [loading, setLoading] = useState(true);
  const [rateInput, setRateInput] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [rating, setRating] = useState("?");
  const [tmp, setTmp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmp(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setRating(tmp);
      setRateInput(true);
    }
  };
  const onClick = () => {
    setRating(tmp);
    setRateInput(true);
  };
  const getClubs = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    console.log(json);
    setClubs(json.data.movies);
    setLoading(false);
  };

  /* running one time */
  useEffect(() => {
    getClubs();
  }, [rating]);

  // console.log(clubs);
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>
          <br />
          <strong>서강아리</strong> {<span className={styles.word}> !</span>}
        </h1>
      </div>
      <div>
        {rateInput ? null : (
          <div>
            <div className={styles.container}>
              <p>
                - 환영합니다, <strong>서강</strong>대학교 동
                <strong>아리</strong>
                플랫폼입니다!
                {" | "}
                <a href="https://www.instagram.com/jooeon.kang/?hl=ko">
                  @Team_Luwak
                </a>
              </p>
            </div>
            <div className={styles.container}>
              <p>
                서강대학교 총동아리 연합 학생회{" "}
                <a href="https://sgdongyeon.oopy.io/">[바로가기]</a>
              </p>
            </div>
          </div>
        )}
      </div>
      <div>
        {rateInput ? (
          <div>
            <br /> <br /> <br />
            <div className={styles.container}>
              <button className={styles.btn_a} onClick={onClick}>
                봉사
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                사회교양
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                종교
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                연행예술
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                체육
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                학술
              </button>
            </div>
            <div className={styles.search}>
              <br /> <br /> <br />
            </div>
            <div className={styles.container}>
              <input
                type="search"
                id="search"
                value={tmp}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="이름으로 검색하기"
              />

              <button className={styles.btn} onClick={onClick}>
                GO
              </button>
            </div>
          </div>
        ) : (
          <a href="https://www.sogang.ac.kr/campus/b_club03.html">
            <div className={styles.bg}></div>
          </a>
        )}
      </div>

      <div className={styles.container}>
        {rateInput ? (
          loading ? (
            <h3>Loading...</h3>
          ) : (
            <div>
              <div className={styles.clubs}>
                {clubs.map((club: ClubType) => (
                  <Club
                    key={club.id}
                    id={club.id}
                    title={club.title}
                    year={club.year}
                    rating={club.rating}
                    coverImg={club.medium_cover_image}
                    summary={club.summary}
                    genres={club.genres}
                  />
                ))}
              </div>
            </div>
          )
        ) : (
          <div>
            <div className={styles.search}>
              <br />
              <br />
              <button className={styles.btn_a} onClick={onClick}>
                봉사
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                사회교양
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                종교
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                연행예술
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                체육
              </button>
              <button className={styles.btn_a} onClick={onClick}>
                학술
              </button>
            </div>
            <div className={styles.search}>
              <br /> <br /> <br />
            </div>
            <div className={styles.container}>
              <input
                type="search"
                id="search"
                value={tmp}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="이름으로 검색하기"
              />

              <button className={styles.btn} onClick={onClick}>
                GO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
