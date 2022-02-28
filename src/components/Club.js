import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Club.module.css";

function Club({ id, title, year, rating, coverImg, summary, genres }) {
  return (
    <div className={styles.club}>
      <Link to={`${process.env.PUBLIC_URL}/club/${id}`}>
        <img src={coverImg} alt="Poster" className={styles.club__img} />
      </Link>
      <div>
        <h2 className={styles.club__title}>
          <Link to={`${process.env.PUBLIC_URL}/club/${id}`}>{title}</Link>
        </h2>
        <h5 className={styles.club__year}>
          {year} ({rating} / 10.0)
        </h5>
        <p className={styles.club__summary}>
          <Link to={`${process.env.PUBLIC_URL}/club/${id}`}>
            {summary.length < 10
              ? "No description."
              : summary.length > 235
              ? `${summary.slice(0, 235)}...`
              : summary}
          </Link>
        </p>
        <h6>
          <Link to={`${process.env.PUBLIC_URL}/club/${id}`}>Details</Link>
        </h6>
        {/* <ul className={styles.club__genres}>
          {genres.map((genre) => (
            <li>{genre}</li>
          ))}
        </ul> */}
      </div>
      {/* <hr /> */}
    </div>
  );
}

Club.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  rating: PropTypes.number,
  coverImg: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Club;
