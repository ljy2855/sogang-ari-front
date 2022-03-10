import { Col, Row } from "antd";
import styles from "./LoginButton.module.scss";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout as logoutSaga } from "../redux/modules/auth";
import useAccessToken from "../hooks/useAccessToken";

function LoginButton() {
  const dispatch = useDispatch();
  const token = useAccessToken();

  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  return (
    <>
      {token !== null ? (
        <div className="btn">
          <button className={styles.btn} onClick={logout}>
            로그아웃
          </button>
        </div>
      ) : (
        <a href={"/signin"} className="btn">
          <button className={styles.btn} onClick={undefined}>
            로그인/회원가입
          </button>
        </a>
      )}
    </>
  );
}

export default LoginButton;
