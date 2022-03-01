import { ClubDetailType } from "../types";
import styles from "./Club.module.css";
import React from "react";
import LoginButton from "./LoginButton.module";
import { Row, Col } from "antd";
import Favorite from "./Favorite.module";

function ClubDetail(clubDetail: ClubDetailType) {
  console.log("ClubDetail!");
  return (
    <div>
      <LoginButton />
      <br />
      <br />
      <br />
      <Row align="middle" className={styles.main_row}>
        <Col span={4}></Col>
        <Col span={16}>
          <div className={styles.club}>
            <img
              src={clubDetail.large_cover_image}
              alt="Poster"
              className={styles.club__img}
            />
            <div>
              <h1 className={styles.club__title}>{clubDetail.title}</h1>
              <p className={styles.club__rating}>
                rating : {clubDetail.rating} / 10.0
              </p>
              <p className={styles.club__summary}>
                {clubDetail.description_full.length < 2
                  ? "No description."
                  : clubDetail.description_full}
              </p>
              <hr />
              <div className={styles.club__detail}>
                <ul>
                  <h4>Genres</h4>
                  {clubDetail.genres.map((genre: string) => (
                    <li>{genre}</li>
                  ))}
                </ul>
                <ul>
                  <h4>Runtime</h4>
                  <p>{clubDetail.runtime < 1 ? "?" : clubDetail.runtime} min</p>
                </ul>
                <ul>
                  <h4>Downloads</h4>
                  <p>{clubDetail.download_count}</p>
                </ul>
                <ul>
                  <h4>Likes </h4>
                  <p>{clubDetail.like_count}</p>
                </ul>
              </div>
              <Favorite />
            </div>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

export default ClubDetail;
