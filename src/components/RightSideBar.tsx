import { Container } from "react-bootstrap";
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
          <br />
          <div>
            <a
              className={styles.a}
              href="https://www.instagram.com/jooeon.kang/?hl=ko"
            >
              Instagram
            </a>
          </div>
          <div>
            <a className={styles.a} href="https://www.facebook.com/">
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RightSideBar;
