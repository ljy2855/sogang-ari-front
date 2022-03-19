import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import ClubService from "../services/ClubService";
import { ClubResType } from "../types";
import styles from "./FilterClub.module.scss";

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
        <div className="row row-cols-6 justify-content-center">
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("봉사분과", 0)}
            >
              봉사
            </button>
          </div>
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("사회교양분과", 0)}
            >
              사회교양
            </button>
          </div>
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("종교분과", 0)}
            >
              종교
            </button>
          </div>
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("연행예술분과", 0)}
            >
              연행예술
            </button>
          </div>
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("체육분과", 0)}
            >
              체육
            </button>
          </div>
          <div className="col">
            <button
              className={styles.category}
              onClick={onClick("학술분과", 0)}
            >
              학술
            </button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-4">
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="동아리명"
            aria-describedby="addon-wrapping"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            height={10}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={onClick(tmp, 1)}
          >
            검색
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterClub;
