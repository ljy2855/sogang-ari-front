import { ClubResType } from "../types";
import styles from "./Club.module.css";
import { Col, Row } from "antd";
import Favorite from "./Favorite.module";
import React from "react";

function Club(club: ClubResType) {
  return (
    <div className={styles.club}>
      <img
        src="/images/sogang_bg-removebg.png"
        alt="Poster"
        className={styles.club__img}
      />
      <div>
        <h2 className={styles.club__title}>{club.name}</h2>
        <h5 className={styles.club__year}>
          {club.section} (recruiting:{club.recruiting})
        </h5>
        <p className={styles.club__summary}>{club.introduction}</p>
        <p className={styles.club__summary}>
          {club.detail.length < 10
            ? "No description."
            : club.detail.length > 75
            ? `${club.detail.slice(0, 75)}...`
            : club.detail}
        </p>
        <a
          className={styles.club__summary}
          href={club.url}
          target="_blank"
          rel="noreferrer"
        >
          {club.url}
        </a>
        <Row>
          <Col span={12}>
            <a href={`/club/${club.id}`}>Details</a>
          </Col>
          <Favorite />
        </Row>
      </div>
    </div>
  );
}

export default Club;

/* 
            <label className="toggle" for="uniqueID">
              <input type="checkbox" className="toggle__input" id="uniqueID" />
              <span className="toggle-track">
                <span className="toggle-indicator">
                  <span className="checkMark">
                    <svg
                      viewBox="0 0 24 24"
                      id="ghq-svg-check"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              Enabled toggle label
            </label> */
