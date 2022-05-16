import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import ClubService from "../services/ClubService";
import { ClubResType } from "../types";
import styles from "./FilterClub.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterClubProps {
  setClubs: Dispatch<SetStateAction<ClubResType[]>>;
}

function FilterClub({ setClubs }: FilterClubProps) {
  const [isInput, setisInput] = useState(false);
  const [section, setSection] = useState("");
  const [mode, setMode] = useState(0);
  const [tmp, setTmp] = useState("");

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
  const getClubs = async (section: string, mode: number) => {
    if (section !== "") {
      console.log(section, mode);
      if (mode === 0) {
        const tmp = ClubService.getClubsBySection(section).then((response) =>
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
  return (
    <>
      <div className="container px-4">
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchTerm}
            placeholder="Club Name"
            // aria-describedby="addon-wrapping"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            className={styles.searchButton}
            // id="button-addon2"
            onClick={onClick(tmp, 1)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <br />
        <br />
        <div className="row row-cols-6 justify-content-center">
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("봉사분과", 0)}
            >
              봉사
            </button>
          </div>
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("사회교양분과", 0)}
            >
              사회교양
            </button>
          </div>
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("종교분과", 0)}
            >
              종교
            </button>
          </div>
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("연행예술분과", 0)}
            >
              연행예술
            </button>
          </div>
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("체육분과", 0)}
            >
              체육
            </button>
          </div>
          <div className={styles.category_btn}>
            <button
              className={styles.category}
              onClick={onClick("학술분과", 0)}
            >
              학술
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterClub;
