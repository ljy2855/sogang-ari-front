import { ClubDetailType } from "../types";
import styles from "./Club.module.css";

function ClubDetail(clubDetail: ClubDetailType) {
  return (
    <div className={styles.club}>
      <img
        src={clubDetail.coverImg}
        alt="Poster"
        className={styles.club__img2}
      />
      <div>
        <h1 className={styles.club__title}>{clubDetail.title}</h1>
        <p className={styles.club__rating}>
          rating : {clubDetail.rating} / 10.0
        </p>
        <p className={styles.club__summary}>
          {clubDetail.summary.length < 10
            ? "No description."
            : clubDetail.summary}
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
            <p>{clubDetail.download}</p>
          </ul>
          <ul>
            <h4>Likes </h4>
            <p>{clubDetail.like}</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;
