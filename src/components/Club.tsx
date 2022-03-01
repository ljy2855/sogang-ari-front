import { ClubType } from "../types";
import styles from "./Club.module.css";
import { Col, Row, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

function onChange(e: CheckboxChangeEvent) {
  console.log(`checked = ${e.target.checked}`);
}

function Club(club: ClubType) {
  return (
    <div className={styles.club}>
      <img
        src={club.medium_cover_image}
        alt="Poster"
        className={styles.club__img}
      />
      <div>
        <h2 className={styles.club__title}>{club.title}</h2>
        <h5 className={styles.club__year}>
          {club.year} ({club.rating} / 10.0)
        </h5>
        <p className={styles.club__summary}>
          {club.summary.length < 10
            ? "No description."
            : club.summary.length > 75
            ? `${club.summary.slice(0, 75)}...`
            : club.summary}
        </p>
        <Row>
          <Col span={12}>
            <a href={`${document.location.href}club/${club.id}`}>Details</a>
          </Col>
          <Col span={12}>
            <Checkbox onChange={onChange}>즐겨찾기</Checkbox>
          </Col>
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
