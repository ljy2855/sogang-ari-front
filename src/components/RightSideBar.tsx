import { Col, Container, Row } from "react-bootstrap";
import { LoginReqType } from "../types";
import LoginButton from "./LoginButton";
import styles from "./RightSideBar.module.scss";

interface AuthInterface {
  logout: () => void;
  login: ({ userId, password }: LoginReqType) => void;
  loading: boolean;
  error: Error | null;
}

const RightSideBar: React.FC<AuthInterface> = ({
  logout,
  login,
  loading,
  error,
}) => {
  return (
    <>
      <Container className={styles.sidebar}>
        <div className={styles.items}>
          <div className={styles.login}>
            <LoginButton
              login={login}
              logout={logout}
              loading={loading}
              error={error}
            ></LoginButton>
          </div>
          <div>Instagram</div>
          <div>FaceBook</div>
          <div>Else</div>
        </div>
      </Container>
    </>
  );
};

export default RightSideBar;
