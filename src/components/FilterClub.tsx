import styles from "./FilterClub.module.scss";
function FilterClub() {
  return (
    <>
      <div className="container px-4">
        <div className="row row-cols-6 justify-content-center">
          <div className="col">
            <button className={styles.category}>봉사</button>
          </div>
          <div className="col">
            <button className={styles.category}>사회교양</button>
          </div>
          <div className="col">
            <button className={styles.category}>종교</button>
          </div>
          <div className="col">
            <button className={styles.category}>연행예술</button>
          </div>
          <div className="col">
            <button className={styles.category}>체육</button>
          </div>
          <div className="col">
            <button className={styles.category}>학술</button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-4">
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="동아리명"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            height={10}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            검색
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterClub;
